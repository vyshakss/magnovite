import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const eventsDataPath = path.join(__dirname, 'src/data/eventsData.ts');
const eventsDataStr = fs.readFileSync(eventsDataPath, 'utf-8');

// Extract all slugs using regex
const slugs = [...eventsDataStr.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);

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

console.log(`Successfully copied index.html to ${allRoutes.length} route folders.`);
