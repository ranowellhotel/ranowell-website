// Regenerates all Kings Court gallery WebP files from the JPG originals,
// resized to a web-appropriate size. The grid renders each image in a
// ~370px cell, so 1280px on the long edge is crisp even on 3x displays
// while cutting file size ~90%.
//
// Usage: node scripts/optimize-kings-court.mjs
import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEST_DIR = resolve(__dirname, "..", "src/assets/banquet/kings_court");
const WEBP_DIR = resolve(DEST_DIR, "webp");
const MAX_EDGE = 1280;
const QUALITY = 78;

const jpgs = readdirSync(DEST_DIR).filter((f) => /^kingsHall\d+\.jpg$/i.test(f));

let total = 0;
for (const jpg of jpgs) {
  const name = jpg.replace(/\.jpg$/i, "");
  const src = resolve(DEST_DIR, jpg);
  const out = resolve(WEBP_DIR, `${name}.webp`);

  await sharp(src)
    .rotate() // respect EXIF orientation
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);

  const kb = (statSync(out).size / 1024).toFixed(0);
  total += Number(kb);
  console.log(`  ${name}.webp  ${kb}KB`);
}

console.log(`Done. ${jpgs.length} images, ~${(total / 1024).toFixed(1)}MB total.`);
