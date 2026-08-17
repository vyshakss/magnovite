# MAGNOVITE 2026 — static site (pure HTML / CSS / JavaScript)

No Node, no npm, no Vite, no build step. Just files.

```
static-site/
  index.html        Home + cinematic opening (pulsar → explosion → butterflies → dust)
  about.html        About / team
  events.html       34+ events, filters, search, ?event=<id> deep links
  gallery.html      Bento gallery + lightbox
  css/styles.css    Design system (tokens, glass surfaces, header, countdown, footer)
  css/*.css         Page-specific styles
  js/chrome.js      Shared header, mega menu, countdown, footer (injected into every page)
  js/cosmic.js      three.js cosmic scene (pulsar → explosion → butterfly swarm → dust cloud)
  js/shaders.js     GLSL shaders for the scene
  js/events-data.js Event catalogue data
  logos/ images/    Assets
  BROCHURE.pdf favicon.ico robots.txt
```

## Run it

The pages use ES modules, so open them through a web server (not `file://`):

```bash
cd static-site
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

## Deploy it

Upload the whole `static-site` folder to any static host (GitHub Pages, Netlify drop,
Cloudflare Pages, Apache/nginx, cPanel). `index.html` is the entry point.

## Notes

- `three.js` is loaded from a CDN (`https://unpkg.com/three@0.169.0`). For a fully offline
  build, download `three.module.js` into `js/vendor/` and change the import in `js/cosmic.js`.
- Fonts (Outfit + DM Sans) come from Google Fonts via `<link>`.
- The cosmic scene writes `--cine`, `--flash`, `--reveal` and `--chrome` CSS variables on
  `:root` every frame; CSS uses them to reveal the wordmark, flash the screen and fade in
  the site chrome.
- Adaptive quality: particle count and pixel ratio drop on mobile user agents; the scene
  pauses while the tab is hidden.
