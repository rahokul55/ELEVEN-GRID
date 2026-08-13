# ELEVEN GRID

ELEVEN GRID is an original football-knowledge strategy game built around a 3×3 club-intersection grid. The gameplay category is inspired by football-grid/XOX games, while the code, visual system, progression and interface in this repository are original.

## Playable v0.1

- No registration or login.
- On the first visit, the player chooses a username once; the local profile is remembered in the browser.
- Responsive desktop/mobile interface.
- **15 real clubs** and a curated **40-player seed database** with real career relationships.
- Club/player reference images are requested at runtime from Wikipedia page-image endpoints rather than redistributed in this repository.
- 3×3 intersection validation engine with one-use-per-player rules.
- **Quick Match:** a clearly labelled AI opponent, turn changes, valid/invalid answers, win/draw detection, rating, XP and match history.
- **Daily Grid:** date-seeded solo grid.
- Searchable player database and club gallery.
- Local statistics, rating and level progression.
- Installable web-app manifest and GitHub Pages deployment workflow.
- Data/engine tests in `tests/game.test.mjs`.

## Run locally

The app uses ES modules, so serve the repository over HTTP instead of opening `index.html` directly.

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Tests

```bash
npm test
```

No third-party npm package is required by the current build.

## GitHub Pages

The repository contains `.github/workflows/pages.yml`. Once GitHub Pages is configured to use **GitHub Actions** as the publishing source, every push to `main` can deploy the site.

Expected project URL:

`https://rahokul55.github.io/ELEVEN-GRID/`

## Architecture

```text
ELEVEN-GRID/
├── index.html
├── styles.css
├── manifest.webmanifest
├── assets/
│   └── icon.svg
├── js/
│   ├── clubs.mjs       # club catalogue
│   ├── players-*.mjs   # footballer seed data
│   ├── data.mjs        # combined data + curated boards
│   ├── engine.mjs      # pure validation/win/seed helpers
│   ├── test.js         # local profile/rating helpers (temporary filename)
│   ├── sample-data.mjs # playable Quick Match + Daily Grid module (temporary filename)
│   └── app.mjs         # shell, navigation, DB views, image hydration
├── tests/
│   └── game.test.mjs
└── .github/workflows/
    └── pages.yml
```

The two temporary module filenames above are retained only to keep the current branch stable during the initial deploy; they can be renamed cleanly in the next refactor.

## Multiplayer roadmap

GitHub Pages is a static host, so the current Quick Match mode is intentionally labelled as **AI** rather than pretending to be online. True realtime 1v1/2v2, matchmaking, global leaderboards and shared profiles require a backend/realtime service and will be added as a separate phase.

## Data and media note

The seed database is curated football-history data used by the validation engine. Player photographs, club crests, names and trademarks may be protected by separate rights. For a commercial store release, use media and data under licences/permissions appropriate for that release; do not assume that a runtime reference image is automatically cleared for commercial redistribution.
