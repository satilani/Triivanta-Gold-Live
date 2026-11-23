import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const rootDir = process.cwd();
const distHtmlPath = path.resolve(rootDir, 'dist/index.html');
const ssrDir = path.resolve(rootDir, 'dist-ssr');
const ssrEntryPath = path.resolve(ssrDir, 'entry-server.js');

async function prerender() {
  if (!fs.existsSync(distHtmlPath)) {
    throw new Error(`Expected built client HTML at ${distHtmlPath}`);
  }
  if (!fs.existsSync(ssrEntryPath)) {
    throw new Error(`Expected built SSR entry at ${ssrEntryPath}`);
  }

  const template = fs.readFileSync(distHtmlPath, 'utf-8');
  const { render } = await import(pathToFileURL(ssrEntryPath).href);
  const appHtml = render().replace(/(src|href)="\/assets\//g, '$1="./assets/');

  if (!template.includes('<!--app-html-->')) {
    throw new Error('Missing <!--app-html--> placeholder in dist/index.html');
  }

  const finalHtml = template.replace('<!--app-html-->', appHtml);

  // Verify critical SEO, AEO, and regulatory content exist in static HTML
  const requiredMarkers = [
    '<h1',
    'TRIIVANTA',
    'UPRERAPRJ180628/11/2026',
    'application/ld+json',
    'FAQPage',
    'RealEstateListing',
    'Plot 36',
    'Investor &amp; Buyer Due-Diligence FAQ',
  ];

  const normalizedHtml = finalHtml.replace(/<!--\s*-->/g, '');
  const missing = requiredMarkers.filter((marker) => !normalizedHtml.includes(marker));
  if (missing.length > 0) {
    throw new Error(`Pre-render verification failed. Missing markers: ${missing.join(', ')}`);
  }

  fs.writeFileSync(distHtmlPath, finalHtml, 'utf-8');
  fs.rmSync(ssrDir, { recursive: true, force: true });

  console.log(
    `[prerender] Pre-rendered static HTML written to dist/index.html (${(
      Buffer.byteLength(finalHtml, 'utf-8') / 1024
    ).toFixed(1)} KB)`
  );
}

prerender().catch((err) => {
  console.error('[prerender] Failed:', err);
  process.exit(1);
});
