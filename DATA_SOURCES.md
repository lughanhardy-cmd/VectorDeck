# Data Sources

VectorDeck uses layered data so the planner can be useful without pretending every route is guaranteed current.

## Curated Starter Data

The curated route, aircraft and airline fleet data in `script.js` is the preferred source for route matches. These entries are intentionally small and manually maintained for believable virtual airline planning.

## Broad Route Fallback

`data/openflights-routes.json` is generated from OpenFlights data via:

```sh
npm run build:data
```

Source: https://openflights.org/data.php

Use this as broad historical/community coverage. Do not describe it as live, complete or fully current real-world airline operations.

## Airports And Runways

Airport and runway lookup is loaded from OurAirports CSV data through the local server.

Source: https://ourairports.com/data/

## Weather

METAR data is loaded through the AviationWeather API proxy in `server.js`.

Source: https://aviationweather.gov/data/api/

## Launch Rule

For public launch copy, say "real-world inspired" or "open route coverage" unless the route is in the curated layer or backed by a licensed/current airline data source.
