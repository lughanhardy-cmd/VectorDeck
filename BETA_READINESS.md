# VectorDeck Beta Readiness

## Current Beta Preview

Run the site through the local preview server, not by opening `index.html` directly. Live METAR, airport lookup, SimBrief handoff and feedback capture depend on the server.

```sh
PORT=4183 node server.js
```

Then open:

```text
http://localhost:4183/
```

## What Was Hardened

- One clear server-based preview path with an on-page status banner.
- Large local route database generated from OpenFlights, with curated route data taking priority.
- Data status cards for route coverage, airport lookup and live weather.
- Homepage story tightened around virtual airline route planning.
- Missing route states now suggest related starter routes instead of dead-ending.
- Airport briefing keeps broad ICAO lookup, runway/performance handoff and runway data cards.
- Feedback now saves to `data/feedback.jsonl` when the server is running, with email fallback when needed.
- Server exposes `/api/health` and `/api/data-status` for hosting checks.
- Mobile layout has specific handling for the hero, wing slide, route list and airport briefing.
- Footer now includes the simulation-only disclaimer.

## Still Needed Before Public Beta

- Host the site on a real domain with the Node server running behind HTTPS.
- Decide whether feedback should go to a database, email service, or admin dashboard.
- Replace the generic reviews with genuine tester comments.
- Treat OpenFlights route data as broad historical/community coverage, not guaranteed current airline operations.
- Add licensed/live route data before claiming current real-world airline coverage at scale.
- Do a full test pass on Safari, Chrome, iPhone width, iPad width and desktop.

## Data Sources

- Airport/runway data: OurAirports CSV data.
- METAR: AviationWeather API.
- Broad route fallback: OpenFlights routes, airports and airlines data.
- Curated route layer: project-maintained starter data in `script.js`.
