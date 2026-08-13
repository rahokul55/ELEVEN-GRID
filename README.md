# ELEVEN GRID

ELEVEN GRID is an original football-knowledge strategy game built around a 3×3 club intersection grid. The project is inspired by the *genre* of football grid/XOX games, but its code, visual system, progression, data model and UI are original.

## Current build

- No registration/login flow.
- First launch asks for a username once and stores the local profile in the browser.
- Responsive desktop/mobile game UI.
- Real club and footballer names in a curated football database.
- Real player/club reference images are resolved at runtime from Wikipedia page-image endpoints; images are not redistributed in this repository.
- 3×3 intersection engine with answer validation.
- Quick Match vs clearly-labelled AI opponent.
- Daily Grid solo challenge.
- Local rating, XP, level, wins/draws/losses and match history.
- Searchable footballer and club database.
- PWA manifest + service worker for installable/offline shell.
- Automated data/engine tests.
- GitHub Pages deployment workflow.

## Run locally

Because the app uses ES modules, serve the repository with any local HTTP server instead of opening `index.html` directly.

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Tests

```bash
npm test
```

No third-party npm dependency is required for the current build.

## GitHub Pages

The repository contains `.github/workflows/pages.yml`. After GitHub Pages is configured to use **GitHub Actions** as its publishing source, every push to `main` deploys the site automatically.

Expected project URL:

`https://rahokul55.github.io/ELEVEN-GRID/`

## Data and media note

Club/player relationships in `js/data.mjs` are curated football-history data used by the validation engine. Remote images are requested from Wikipedia/Wikimedia at runtime and are not committed to this repository. Rights in player photographs, club crests, names and trademarks remain with their respective owners/rightsholders. For a commercial store release, replace/reference media only under licences appropriate for that release.

## Architecture

```text
ELEVEN-GRID/
├── index.html
├── styles.css
├── manifest.webmanifest
├── sw.js
├── js/
│   ├── data.mjs       # clubs, players, curated boards
│   ├── engine.mjs     # pure validation/win/AI helpers
│   └── app.mjs        # UI, profile, modes, persistence
├── tests/
│   └── game.test.mjs
└── .github/workflows/
    ├── ci.yml
    └── pages.yml
```
