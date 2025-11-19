import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = 'public';
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

/**
 * Retrieves all image files from the public directory that match supported extensions.
 * @returns {Promise<string[]>} Array of image filenames
 */
async function getImageFiles() {
  const files = await readdir(PUBLIC_DIR);
  return files.filter((file) => SUPPORTED_EXTENSIONS.includes(extname(file).toLowerCase()));
}

/**
 * Converts a single image to WebP format with 80% quality.
 * @param {string} inputPath - Path to the input image file
 * @param {string} outputDir - Directory to save the converted images
 * @returns {Promise<boolean>} True if conversion succeeded, false otherwise
 */
async function convertImage(inputPath, outputDir) {
  const filename = basename(inputPath, extname(inputPath));

  try {
    // Convert to WebP format
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(join(outputDir, `${filename}.webp`));

    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${filename}:`, error.message);
    return false;
  }
}

/**
 * Processes all images in the public directory, converting them to WebP and AVIF formats.
 * Logs progress and results to the console.
 */
async function convertAllImages() {
  // Get list of all supported image files
  const imageFiles = await getImageFiles();

  // Log the files being processed
  imageFiles.forEach((file) => console.log(`  • ${file}`));

  let successCount = 0;
  let failCount = 0;

  // Process each image file
  for (const file of imageFiles) {
    const inputPath = join(PUBLIC_DIR, file);
    const success = await convertImage(inputPath, PUBLIC_DIR);

    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  // Log success message if all conversions succeeded
  if (failCount === 0) {
    console.log(`✓ Successfully converted ${successCount} images to WebP format`);
  }
}

convertAllImages().catch(console.error);
