# Publishing VectorDeck

The site is ready as a Node web service. The only remaining step is uploading the files to GitHub with an authenticated GitHub account.

## Files To Upload

Upload these files and folders to the `lughanhardy-cmd/VectorDeck` repository:

- `index.html`
- `styles.css`
- `script.js`
- `server.js`
- `package.json`
- `render.yaml`
- `.gitignore`
- `README.md`
- `BETA_READINESS.md`
- `DATA_SOURCES.md`
- `scripts/build-route-data.js`

Do not upload:

- `_deploy_git/`
- `vectordeck-launch.zip`
- `data/feedback.jsonl`
- `data/openflights-routes.json`

Render will rebuild `data/openflights-routes.json` during deployment.

## Render Setup

1. Go to Render.
2. Choose New, then Blueprint or Web Service.
3. Connect the `lughanhardy-cmd/VectorDeck` GitHub repository.
4. Render should detect `render.yaml`.
5. Deploy the service.

The service uses:

```text
Build command: npm install && npm run build:data
Start command: npm start
Environment variable: HOST=0.0.0.0
```

After deployment, test:

```text
/api/health
/api/data-status
```
