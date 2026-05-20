# VectorDeck beta preview

VectorDeck is a briefing-first virtual airline route planner for MSFS 2020/2024 and X-Plane 11/12.

Run the local preview server before testing. Live METAR, airport lookup and feedback capture do not work from `file://`.

```sh
npm run dev
```

Then open the local URL printed by the server.

Feedback submitted through the beta preview is saved locally to `data/feedback.jsonl`.

To rebuild the open route fallback database:

```sh
npm run build:data
```

To check the scripts:

```sh
npm run check
```

See `BETA_READINESS.md` for the current launch checklist.

## Deploying On Render

This repo includes `render.yaml`.

1. Push the repo to GitHub.
2. In Render, create a new Blueprint or Web Service from the repo.
3. Render will use `npm start`.
4. Make sure the environment variable `HOST=0.0.0.0` is set.

Health check:

```text
/api/health
```
