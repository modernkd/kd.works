import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const svgPath = join(process.cwd(), 'public', 'favicon.svg');
const svgBuffer = readFileSync(svgPath);

const sizes = [16, 32, 48, 192, 512];

/**
 * Generates favicon files in multiple sizes and formats from the SVG source.
 * Creates PNG favicons for various sizes, Apple touch icon, and ICO favicon.
 */
async function generateFavicons() {
  // Generate PNG favicons in multiple sizes
  for (const size of sizes) {
    const outputPath = join(process.cwd(), 'public', `favicon-${size}x${size}.png`);
    await sharp(svgBuffer).resize(size, size).png().toFile(outputPath);
    console.log(`✓ Generated favicon-${size}x${size}.png`);
  }

  // Generate Apple touch icon (180x180)
  const appleTouchPath = join(process.cwd(), 'public', 'apple-touch-icon.png');
  await sharp(svgBuffer).resize(180, 180).png().toFile(appleTouchPath);
  console.log('✓ Generated apple-touch-icon.png');

  // Generate ICO favicon (32x32, but saved as PNG for better compatibility)
  const faviconIcoPath = join(process.cwd(), 'public', 'favicon.ico');
  await sharp(svgBuffer).resize(32, 32).png().toFile(faviconIcoPath);
  console.log('✓ Generated favicon.ico');
}

generateFavicons().catch(console.error);
