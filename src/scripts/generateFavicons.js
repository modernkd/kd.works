import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const svgPath = join(process.cwd(), 'public', 'favicon.svg');
const svgBuffer = readFileSync(svgPath);

// Generate different sizes
const sizes = [16, 32, 48, 192, 512];

async function generateFavicons() {
  console.log('Generating favicons...');

  for (const size of sizes) {
    const outputPath = join(process.cwd(), 'public', `favicon-${size}x${size}.png`);
    await sharp(svgBuffer).resize(size, size).png().toFile(outputPath);
    console.log(`Generated ${size}x${size} favicon`);
  }

  // Generate apple-touch-icon
  const appleTouchPath = join(process.cwd(), 'public', 'apple-touch-icon.png');
  await sharp(svgBuffer).resize(180, 180).png().toFile(appleTouchPath);
  console.log('Generated apple-touch-icon');

  // Generate favicon.ico (32x32 is standard)
  const faviconIcoPath = join(process.cwd(), 'public', 'favicon.ico');
  await sharp(svgBuffer).resize(32, 32).png().toFile(faviconIcoPath);
  console.log('Generated favicon.ico');

  console.log('All favicons generated successfully!');
}

generateFavicons().catch(console.error);
