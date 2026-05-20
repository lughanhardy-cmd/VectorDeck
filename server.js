const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const root = __dirname;
const port = Number(process.env.PORT || 4181);
const feedbackPath = path.join(root, "data", "feedback.jsonl");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

let airportCache = null;
let runwayCache = null;

function send(response, status, body, type = "text/plain; charset=utf-8") {
  response.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": type.startsWith("text/html") || type.startsWith("application/json") ? "no-store" : "public, max-age=3600",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  });
  response.end(body);
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 20000) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

async function saveFeedback(payload) {
  const entry = {
    createdAt: new Date().toISOString(),
    name: String(payload.name || "").slice(0, 120),
    email: String(payload.email || "").slice(0, 160),
    message: String(payload.message || "").slice(0, 4000),
    route: String(payload.route || "").slice(0, 16),
    aircraft: String(payload.aircraft || "").slice(0, 120),
    page: String(payload.page || "").slice(0, 500)
  };

  if (!entry.message.trim()) {
    throw new Error("Feedback message is required");
  }

  await fs.promises.mkdir(path.dirname(feedbackPath), { recursive: true });
  await fs.promises.appendFile(feedbackPath, `${JSON.stringify(entry)}\n`, "utf8");
}

function fetchMetar(icao) {
  const endpoint = `https://aviationweather.gov/api/data/metar?ids=${encodeURIComponent(icao)}&format=json&taf=false&hours=2`;

  return new Promise((resolve, reject) => {
    const request = https.get(endpoint, {
      headers: {
        "User-Agent": "VectorDeck local METAR proxy"
      }
    }, (apiResponse) => {
      let body = "";

      apiResponse.setEncoding("utf8");
      apiResponse.on("data", (chunk) => {
        body += chunk;
      });
      apiResponse.on("end", () => {
        if (apiResponse.statusCode === 204) {
          resolve([]);
          return;
        }

        if (apiResponse.statusCode < 200 || apiResponse.statusCode >= 300) {
          reject(new Error(`AviationWeather returned ${apiResponse.statusCode}`));
          return;
        }

        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(error);
        }
      });
    });

    request.on("error", reject);
    request.setTimeout(10000, () => {
      request.destroy(new Error("METAR request timed out"));
    });
  });
}

function fetchText(endpoint) {
  return new Promise((resolve, reject) => {
    const request = https.get(endpoint, {
      headers: {
        "User-Agent": "VectorDeck local airport data proxy"
      }
    }, (apiResponse) => {
      let body = "";

      apiResponse.setEncoding("utf8");
      apiResponse.on("data", (chunk) => {
        body += chunk;
      });
      apiResponse.on("end", () => {
        if (apiResponse.statusCode < 200 || apiResponse.statusCode >= 300) {
          reject(new Error(`Request returned ${apiResponse.statusCode}`));
          return;
        }
        resolve(body);
      });
    });

    request.on("error", reject);
    request.setTimeout(15000, () => {
      request.destroy(new Error("Airport data request timed out"));
    });
  });
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === "\"" && quoted && next === "\"") {
      value += "\"";
      index += 1;
    } else if (char === "\"") {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (value || row.length) {
        row.push(value);
        rows.push(row);
      }
      value = "";
      row = [];
      if (char === "\r" && next === "\n") {
        index += 1;
      }
    } else {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  const [headers, ...records] = rows;
  return records.map((record) => Object.fromEntries(headers.map((header, index) => [header, record[index] || ""])));
}

async function loadAirportData() {
  if (airportCache && runwayCache) {
    return;
  }

  const [airportsCsv, runwaysCsv] = await Promise.all([
    fetchText("https://davidmegginson.github.io/ourairports-data/airports.csv"),
    fetchText("https://davidmegginson.github.io/ourairports-data/runways.csv")
  ]);

  airportCache = new Map();
  runwayCache = new Map();

  parseCsv(airportsCsv).forEach((airport) => {
    airportCache.set(airport.ident, airport);
  });

  parseCsv(runwaysCsv).forEach((runway) => {
    const ident = runway.airport_ident;
    if (!runwayCache.has(ident)) {
      runwayCache.set(ident, []);
    }
    runwayCache.get(ident).push(runway);
  });
}

function inferAirportBriefing(airport, runways) {
  const usableRunways = runways
    .filter((runway) => runway.closed !== "1" && runway.le_ident)
    .slice(0, 8)
    .map((runway) => ({
      name: runway.he_ident ? `${runway.le_ident}/${runway.he_ident}` : runway.le_ident,
      length: Number(runway.length_ft) || 0,
      width: Number(runway.width_ft) || 0,
      surface: runway.surface || "Unknown",
      lighted: runway.lighted === "1",
      angle: Math.round(Number(runway.le_heading_degT) || Number(runway.le_ident?.slice(0, 2)) * 10 || 0)
    }));
  const longest = Math.max(...usableRunways.map((runway) => runway.length), 0);
  const paved = usableRunways.some((runway) => /ASP|CON|BIT|PEM|paved/i.test(runway.surface));
  const lighted = usableRunways.some((runway) => runway.lighted);
  const approaches = [];

  if (paved && longest >= 6500 && lighted) {
    approaches.push("ILS likely", "RNAV", "Visual");
  } else if (paved) {
    approaches.push("RNAV likely", "Visual");
  } else {
    approaches.push("Visual");
  }

  const tags = [];
  if (longest && longest < 3000) tags.push("Short runway");
  if (longest >= 10000) tags.push("Long runway");
  if (lighted) tags.push("Runway lighting");
  if (!paved) tags.push("Unpaved surface");
  if (Number(airport.elevation_ft) > 3000) tags.push("High elevation");

  return {
    icao: airport.ident,
    name: airport.name,
    elevation: airport.elevation_ft ? `${airport.elevation_ft} ft` : "Unknown",
    runways: usableRunways,
    approaches,
    tags: tags.length ? tags : ["Airport data"],
    notes: longest
      ? `Runway data loaded from OurAirports. Longest runway is ${Math.round(longest * 0.3048)} m / ${longest} ft. Confirm current procedures in charts before flying.`
      : "Airport found, but no usable runway data was returned."
  };
}

function serveFile(requestPath, response) {
  const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath === "/" ? "index.html" : safePath);

  if (!filePath.startsWith(root)) {
    send(response, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      send(response, 404, "Not found");
      return;
    }

    const type = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    send(response, 200, data, type);
  });
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (url.pathname === "/api/health") {
    send(response, 200, JSON.stringify({
      ok: true,
      service: "VectorDeck",
      generatedAt: new Date().toISOString()
    }), "application/json; charset=utf-8");
    return;
  }

  if (url.pathname === "/api/data-status") {
    let routeCount = 0;
    try {
      const routePayload = JSON.parse(fs.readFileSync(path.join(root, "data", "openflights-routes.json"), "utf8"));
      routeCount = routePayload.routeCount || 0;
    } catch (error) {
      routeCount = 0;
    }
    send(response, 200, JSON.stringify({
      routes: routeCount,
      airports: airportCache ? airportCache.size : "lazy-loaded",
      weather: "AviationWeather proxy",
      feedback: "local jsonl"
    }), "application/json; charset=utf-8");
    return;
  }

  if (url.pathname === "/api/metar") {
    const icao = (url.searchParams.get("ids") || "").trim().toUpperCase().slice(0, 4);

    if (!/^[A-Z0-9]{4}$/.test(icao)) {
      send(response, 400, JSON.stringify({ error: "Use a 4-character ICAO airport code." }), "application/json; charset=utf-8");
      return;
    }

    try {
      const data = await fetchMetar(icao);
      send(response, 200, JSON.stringify(data), "application/json; charset=utf-8");
    } catch (error) {
      send(response, 502, JSON.stringify({ error: "Could not load METAR right now." }), "application/json; charset=utf-8");
    }
    return;
  }

  if (url.pathname === "/api/feedback") {
    if (request.method !== "POST") {
      send(response, 405, JSON.stringify({ error: "Use POST." }), "application/json; charset=utf-8");
      return;
    }

    try {
      const body = await readRequestBody(request);
      const payload = JSON.parse(body || "{}");
      await saveFeedback(payload);
      send(response, 200, JSON.stringify({ ok: true }), "application/json; charset=utf-8");
    } catch (error) {
      send(response, 400, JSON.stringify({ error: "Could not save feedback." }), "application/json; charset=utf-8");
    }
    return;
  }

  if (url.pathname === "/api/airport") {
    const ident = (url.searchParams.get("icao") || "").trim().toUpperCase().slice(0, 4);

    if (!/^[A-Z0-9]{3,4}$/.test(ident)) {
      send(response, 400, JSON.stringify({ error: "Use an ICAO airport code." }), "application/json; charset=utf-8");
      return;
    }

    try {
      await loadAirportData();
      const airport = airportCache.get(ident);
      if (!airport) {
        send(response, 404, JSON.stringify({ error: "Airport not found." }), "application/json; charset=utf-8");
        return;
      }

      send(response, 200, JSON.stringify(inferAirportBriefing(airport, runwayCache.get(ident) || [])), "application/json; charset=utf-8");
    } catch (error) {
      send(response, 502, JSON.stringify({ error: "Could not load airport data right now." }), "application/json; charset=utf-8");
    }
    return;
  }

  serveFile(url.pathname, response);
});

const host = process.env.HOST || "::1";

server.listen(port, host, () => {
  const displayHost = host === "::1" ? "[::1]" : host;
  console.log(`VectorDeck preview running at http://${displayHost}:${port}/`);
});
