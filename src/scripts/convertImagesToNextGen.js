import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = 'public';
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

/**
 * Get all image files from the public directory
 */
async function getImageFiles() {
  const files = await readdir(PUBLIC_DIR);
  return files.filter((file) => SUPPORTED_EXTENSIONS.includes(extname(file).toLowerCase()));
}

/**
 * Convert a single image to WebP and AVIF formats
 */
async function convertImage(inputPath, outputDir) {
  const filename = basename(inputPath, extname(inputPath));

  try {
    // Convert to WebP (80% quality for good balance of size/quality)
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(join(outputDir, `${filename}.webp`));

    // Convert to AVIF (80% quality for good balance of size/quality)
    await sharp(inputPath)
      .avif({ quality: 80 })
      .toFile(join(outputDir, `${filename}.avif`));

    console.log(`✓ Converted ${filename}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${filename}:`, error.message);
    return false;
  }
}

/**
 * Main conversion function
 */
async function convertAllImages() {
  console.log('🚀 Starting image conversion to next-gen formats...\n');

  const imageFiles = await getImageFiles();
  console.log(`Found ${imageFiles.length} image files to convert:\n`);
  imageFiles.forEach((file) => console.log(`  • ${file}`));

  let successCount = 0;
  let failCount = 0;

  for (const file of imageFiles) {
    const inputPath = join(PUBLIC_DIR, file);
    const success = await convertImage(inputPath, PUBLIC_DIR);

    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log(`\n📊 Conversion complete!`);
  console.log(`   ✓ Successful: ${successCount}`);
  console.log(`   ✗ Failed: ${failCount}`);
  console.log(`   📁 Total: ${imageFiles.length}`);

  if (failCount === 0) {
    console.log('\n🎉 All images converted successfully!');
    console.log('\nNext steps:');
    console.log('1. Consider updating your code to use the new formats');
    console.log('2. Test your application to ensure images load correctly');
    console.log('3. You can now remove the original PNG/JPEG files if desired');
  }
}

// Run the conversion
convertAllImages().catch(console.error);
