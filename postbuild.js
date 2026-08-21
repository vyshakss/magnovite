import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const eventsDataPath = path.join(__dirname, 'src/data/eventsData.ts');
const eventsDataStr = fs.readFileSync(eventsDataPath, 'utf-8');

// Extract all slugs using regex. Note this only matches the double-quoted key
// form ("slug": "..."), which is how eventsData.ts is currently written; the
// bare `slug: string` on the EventDetail interface is deliberately excluded.
const slugs = [...eventsDataStr.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);

// Fail loudly rather than shipping a build with no event routes. Without this
// a reformat of eventsData.ts (e.g. prettier unquoting the keys) would silently
// produce zero folders and the build would still report success.
if (slugs.length === 0) {
  console.error(
    "No slugs matched in src/data/eventsData.ts — the `\"slug\": \"...\"` key format has probably changed. " +
    "Fix the pattern in postbuild.js before shipping."
  );
  process.exit(1);
}

const staticRoutes = [
  '/about',
  '/gallery',
  '/events'
];

const allRoutes = [...staticRoutes, ...slugs.map(slug => `/events/${slug}`)];

const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error("No index.html found in dist/. Please run build first.");
  process.exit(1);
}

console.log("Generating static route folders for Python server compatibility...");

for (const route of allRoutes) {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.copyFileSync(indexHtmlPath, path.join(routeDir, 'index.html'));
}

// Catch-all fallback. Hosts that DO have SPA support but use the 404 convention
// (GitHub Pages, S3 website hosting, Cloudflare Pages, Netlify) will serve this
// for any path we did not pre-generate, so the app still boots and routes
// client-side. Strict servers ignore it and use the folders above.
fs.copyFileSync(indexHtmlPath, path.join(distDir, '404.html'));

console.log(`Successfully copied index.html to ${allRoutes.length} route folders, plus 404.html.`);

/* Preload the cosmic scene chunk on the home page only.
 *
 * The home route imports CosmicScene dynamically, so the browser only learns
 * the chunk exists after index.js and the route chunk have each downloaded AND
 * parsed — three requests end to end before the intro can draw its first frame.
 * On localhost that chain costs ~130ms; over a network it costs an extra round
 * trip per hop. A modulepreload hint lets the scene download in parallel with
 * the main bundle instead.
 *
 * This runs after the route folders and 404.html have been copied, so the hint
 * lands only in the home page's index.html. The other routes never render the
 * scene and must keep their smaller payload — preloading it everywhere would
 * undo the code split.
 */
const assetsDir = path.join(distDir, 'assets');
const sceneChunk = fs.existsSync(assetsDir)
  ? fs.readdirSync(assetsDir).find((f) => /^CosmicScene-.*\.js$/.test(f))
  : undefined;

if (!sceneChunk) {
  // Not fatal: the site works without the hint, it just starts the scene later.
  console.warn('No CosmicScene-*.js chunk found in dist/assets — skipping the modulepreload hint.');
} else {
  const html = fs.readFileSync(indexHtmlPath, 'utf-8');
  const tag = `<link rel="modulepreload" crossorigin href="/assets/${sceneChunk}">`;

  if (!html.includes('</head>')) {
    console.warn('dist/index.html has no </head> — skipping the modulepreload hint.');
  } else {
    fs.writeFileSync(indexHtmlPath, html.replace('</head>', `  ${tag}\n  </head>`));
    console.log(`Preloading ${sceneChunk} from the home page.`);
  }
}
