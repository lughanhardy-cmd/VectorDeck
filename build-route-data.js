const fs = require("fs/promises");
const https = require("https");
const path = require("path");

const root = path.join(__dirname, "..");
const outputPath = path.join(root, "data", "openflights-routes.json");

const sources = {
  airports: "https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat",
  airlines: "https://raw.githubusercontent.com/jpatokal/openflights/master/data/airlines.dat",
  routes: "https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat"
};

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "VectorDeck route data builder" } }, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => {
        if (response.statusCode < 200 || response.statusCode >= 300) {
          reject(new Error(`${url} returned ${response.statusCode}`));
          return;
        }
        resolve(body);
      });
    }).on("error", reject);
  });
}

function parseDat(text) {
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
      if (char === "\r" && next === "\n") index += 1;
    } else {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  return rows;
}

function clean(value) {
  return value && value !== "\\N" ? value : "";
}

async function main() {
  const [airportsText, airlinesText, routesText] = await Promise.all([
    fetchText(sources.airports),
    fetchText(sources.airlines),
    fetchText(sources.routes)
  ]);

  const airports = new Map();
  parseDat(airportsText).forEach((row) => {
    const id = clean(row[0]);
    const icao = clean(row[5]);
    if (/^[A-Z0-9]{4}$/.test(icao)) {
      airports.set(id, {
        name: clean(row[1]),
        city: clean(row[2]),
        country: clean(row[3]),
        iata: clean(row[4]),
        icao
      });
    }
  });

  const airlines = new Map();
  parseDat(airlinesText).forEach((row) => {
    const id = clean(row[0]);
    const name = clean(row[1]);
    const iata = clean(row[3]);
    const icao = clean(row[4]);
    const active = clean(row[7]);
    if (name && active !== "N") {
      airlines.set(id, { name, iata, icao });
    }
  });

  const routeMap = {};
  parseDat(routesText).forEach((row) => {
    const airlineId = clean(row[1]);
    const sourceAirport = airports.get(clean(row[3]));
    const destinationAirport = airports.get(clean(row[5]));
    const airline = airlines.get(airlineId);

    if (!sourceAirport || !destinationAirport || !airline) return;

    const key = `${sourceAirport.icao}-${destinationAirport.icao}`;
    if (!routeMap[key]) routeMap[key] = [];
    if (!routeMap[key].includes(airline.name)) {
      routeMap[key].push(airline.name);
    }
  });

  Object.keys(routeMap).forEach((key) => {
    routeMap[key] = routeMap[key].sort().slice(0, 10);
  });

  const payload = {
    generatedAt: new Date().toISOString(),
    source: "OpenFlights routes/airports/airlines data",
    sourceUrl: "https://openflights.org/data.php",
    caveat: "Community-maintained historical airline-route data. Verify before treating as current real-world operations.",
    routeCount: Object.keys(routeMap).length,
    routes: routeMap
  };

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(payload)}\n`, "utf8");
  console.log(`Wrote ${payload.routeCount} route pairs to ${path.relative(root, outputPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
