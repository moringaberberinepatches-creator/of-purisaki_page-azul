import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distClient = path.resolve(__dirname, "../dist/client");
const distStatic = path.resolve(__dirname, "../dist/static");

// Copy dist/client to dist/static
fs.cpSync(distClient, distStatic, { recursive: true, force: true });

// Create a simple index.html that loads the JS bundles
const assetsDir = path.join(distStatic, "assets");
const files = fs.readdirSync(assetsDir);

const cssFile = files.find((f) => f.endsWith(".css"));
const jsFiles = files.filter((f) => f.endsWith(".js"));
const indexJs = jsFiles.find((f) => f.startsWith("index-"));
const routesJs = jsFiles.find((f) => f.startsWith("routes-"));

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Berberine Patch — Become the woman he can't stop looking at</title>
    <meta name="description" content="Discreet transdermal Berberine Patch. Steady energy, fewer cravings and visible results in 30 days. Free U.S. shipping & 30-day guarantee." />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="canonical" href="/" />
    <meta property="og:title" content="Berberine Patch — Transdermal Weight Support" />
    <meta property="og:description" content="Thousands of women over 40 swapped harsh pills for the Berberine Patch — 24/7 transdermal technology." />
    <meta property="og:type" content="product" />
    <meta property="og:url" content="/" />
    <meta name="twitter:card" content="summary_large_image" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${indexJs ? `<script type="module" src="/assets/${indexJs}"></script>` : ""}
    ${routesJs ? `<script type="module" src="/assets/${routesJs}"></script>` : ""}
  </body>
</html>
`;

fs.writeFileSync(path.join(distStatic, "index.html"), html);

console.log("Static site generated at dist/static/");
console.log("Files:", fs.readdirSync(distStatic));
