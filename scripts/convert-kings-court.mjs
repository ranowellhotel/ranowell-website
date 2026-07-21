// Converts new Kings Court source photos to WebP and stores originals + webp
// alongside the existing kingsHall1-8 assets.
//
// Usage: node scripts/convert-kings-court.mjs
import sharp from "sharp";
import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const SRC_DIR =
  "C:/Users/Joseph Rodrigo/Downloads/drive-download-20260721T140104Z-1-001";
const DEST_DIR = resolve(root, "src/assets/banquet/kings_court");
const WEBP_DIR = resolve(DEST_DIR, "webp");
const QUALITY = 80;

// New photos only (duplicates of kingsHall3/4 and the AI-generated PNG excluded),
// mapped to the next kingsHall indices continuing from the existing 1-8.
const files = [
  "CMP04529.jpg",
  "CMP04542.jpg",
  "CMP04565.jpg",
  "CMP04572.jpg",
  "CMP04577.jpg",
  "CMP04586.jpg",
  "CMP04590.jpg",
  "CMP04594.jpg",
  "CMP04600.jpg",
  "CMP04625.jpg",
  "CMP04722.jpg",
  "CMP04861.jpg",
];

const START_INDEX = 9;

mkdirSync(WEBP_DIR, { recursive: true });

let index = START_INDEX;
for (const file of files) {
  const src = resolve(SRC_DIR, file);
  if (!existsSync(src)) {
    console.error(`  MISSING: ${src}`);
    continue;
  }

  const name = `kingsHall${index}`;
  const jpgDest = resolve(DEST_DIR, `${name}.jpg`);
  const webpDest = resolve(WEBP_DIR, `${name}.webp`);

  // Keep original jpg next to the webp, matching the existing asset layout.
  copyFileSync(src, jpgDest);
  await sharp(src).webp({ quality: QUALITY }).toFile(webpDest);

  console.log(`  ${file} -> ${name}.jpg + webp/${name}.webp`);
  index++;
}

console.log(`Done. Wrote ${index - START_INDEX} images.`);
