// Adds the curated wedding photos to the main gallery's WEDDINGS category.
// Copies each original jpg into src/assets/gallery/weddings and writes a
// web-optimized WebP (resized to 1280px long edge, quality 78) into webp/.
//
// Photos that already exist in the repo (identical md5 under the banquet
// folders) are skipped here — GalleryPage imports those existing WebP files
// directly instead, so we don't duplicate ~60MB of originals in git.
//
// Usage: node scripts/convert-gallery-weddings.mjs
import sharp from "sharp";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, existsSync, mkdirSync, copyFileSync, statSync } from "node:fs";
import { resolve, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const SRC_DIR = "C:/Users/Joseph Rodrigo/Downloads/final_imgs/weddings";
const ASSETS_DIR = resolve(root, "src/assets");
const DEST_DIR = resolve(ASSETS_DIR, "gallery/weddings");
const WEBP_DIR = resolve(DEST_DIR, "webp");
const MAX_EDGE = 1280;
const QUALITY = 78;

const md5 = (file) => createHash("md5").update(readFileSync(file)).digest("hex");

// Index every original already committed under src/assets, by content hash.
const existing = new Map();
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(jpe?g|png)$/i.test(entry.name) && !full.startsWith(DEST_DIR)) {
      if (!existing.has(md5(full))) existing.set(md5(full), full);
    }
  }
};
walk(ASSETS_DIR);

// Only real photographs — .jpg files (excludes the AI-generated ChatGPT PNG).
const files = readdirSync(SRC_DIR)
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort();

mkdirSync(WEBP_DIR, { recursive: true });

let index = 1;
let totalKb = 0;
const reused = [];
for (const file of files) {
  const src = resolve(SRC_DIR, file);
  const hit = existing.get(md5(src));
  if (hit) {
    reused.push([file, relative(root, hit).replace(/\\/g, "/")]);
    continue;
  }

  const name = `wedding${index}`;
  copyFileSync(src, resolve(DEST_DIR, `${name}.jpg`));

  const out = resolve(WEBP_DIR, `${name}.webp`);
  await sharp(src)
    .rotate() // honor EXIF orientation
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);

  const kb = Number((statSync(out).size / 1024).toFixed(0));
  totalKb += kb;
  console.log(`  ${file} -> ${name}.jpg + webp/${name}.webp  (${kb}KB)`);
  index++;
}

console.log(`\nReused ${reused.length} photos already in src/assets:`);
for (const [file, path] of reused) console.log(`  ${file} -> ${path}`);
console.log(
  `\nDone. Added ${index - 1} new images (wedding1-wedding${index - 1}), ~${(totalKb / 1024).toFixed(1)}MB webp total.`
);
