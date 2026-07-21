// Regenerates ALL Royal Banquet gallery WebP files from their JPG/JPEG
// originals, resized to 1280px on the long edge @ quality 78. Fixes the
// oversized full-resolution webp that made the gallery slow to load.
//
// Usage: node scripts/optimize-royal-banquet.mjs
import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEST_DIR = resolve(__dirname, "..", "src/assets/banquet/royal_banquet");
const WEBP_DIR = resolve(DEST_DIR, "webp");
const MAX_EDGE = 1280;
const QUALITY = 78;

const originals = readdirSync(DEST_DIR).filter((f) =>
  /^royalHall\d+\.jpe?g$/i.test(f)
);

let totalKb = 0;
for (const file of originals) {
  const name = file.replace(/\.jpe?g$/i, "");
  const out = resolve(WEBP_DIR, `${name}.webp`);
  await sharp(resolve(DEST_DIR, file))
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);
  totalKb += statSync(out).size / 1024;
}

console.log(
  `Done. Optimized ${originals.length} images, ~${(totalKb / 1024).toFixed(1)}MB webp total.`
);
