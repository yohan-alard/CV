# CV (Vue conversion)

This repository was converted into a small Vue 3 app (Vite) that renders the original CV as a single-page app with two views: simplified and detailed.

How to run (PowerShell on Windows):

1. Install dependencies (requires Node.js >= 18 recommended):

```powershell
# from repository root
npm install
npm run dev
```

2. Open the URL printed by Vite (usually http://localhost:5173) or the process will open automatically.

Notes:
- The original static page is preserved as `index.orig.html` and `cv-detaille.html`.
- The SPA uses a simple hash-based view switcher: `#/` for simplified, `#/detailed` for detailed.
- If you want a full router or to expand the site, consider adding `vue-router` and extracting repeated parts into smaller components.
