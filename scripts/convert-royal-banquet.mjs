// Adds new Royal Banquet source photos: copies each original jpg next to the
// existing royalHall assets and writes a web-optimized WebP (resized to 1280px
// long edge, quality 78) into webp/. Continues numbering from the existing set.
//
// Usage: node scripts/convert-royal-banquet.mjs
import sharp from "sharp";
import { readdirSync, existsSync, mkdirSync, copyFileSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const SRC_DIR =
  "C:/Users/Joseph Rodrigo/Downloads/ROYAL-20260721T142121Z-1-001/ROYAL";
const DEST_DIR = resolve(root, "src/assets/banquet/royal_banquet");
const WEBP_DIR = resolve(DEST_DIR, "webp");
const START_INDEX = 40; // existing gallery ends at royalHall39
const MAX_EDGE = 1280;
const QUALITY = 78;

// Only real photographs — .jpg files (excludes the AI ChatGPT PNGs and the zip).
const files = readdirSync(SRC_DIR)
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort();

mkdirSync(WEBP_DIR, { recursive: true });

let index = START_INDEX;
let totalKb = 0;
for (const file of files) {
  const src = resolve(SRC_DIR, file);
  if (!existsSync(src)) {
    console.error(`  MISSING: ${src}`);
    continue;
  }

  const name = `royalHall${index}`;
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

console.log(
  `Done. Added ${index - START_INDEX} images (${START_INDEX}-${index - 1}), ~${(totalKb / 1024).toFixed(1)}MB webp total.`
);
