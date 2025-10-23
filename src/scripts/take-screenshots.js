import puppeteer from 'puppeteer';
import sharp from 'sharp';

/**
 * Automates taking screenshots of various pages in the application using Puppeteer.
 * Generates both full-page and cropped screenshots in WebP format for use in documentation and social media.
 */
async function takeScreenshots() {
  // Launch browser and create new page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set up console and error logging from the page
  page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', (error) => console.log('PAGE ERROR:', error.message));

  // Set viewport size for consistent screenshots
  await page.setViewport({ width: 1200, height: 630 });

  const baseUrl = 'http://localhost:3000';

  // Define pages to screenshot with optional nickname for room pages
  const pages = [
    { path: '/', filename: 'home-screenshot' },
    { path: '/fridge', filename: 'fridge-screenshot' },
    { path: '/more-cowbell', filename: 'more-cowbell-screenshot' },
    { path: '/more-cowbell/room/los-pollos-hermanos', filename: 'room-screenshot', nickname: 'walter white' },
  ];

  // Process each page
  for (const { path, filename, nickname } of pages) {
    console.log(`📸 Taking screenshot of ${path}`);

    // Navigate to the page
    await page.goto(`${baseUrl}${path}`, { waitUntil: 'networkidle2' });

    // Handle room pages that require nickname input
    if (nickname) {
      await page.waitForSelector('#nickname');
      await page.type('#nickname', nickname);
      await page.click('button[type="submit"]');

      // Wait for room to load
      await new Promise((resolve) => setTimeout(resolve, 5000));
    } else {
      // Wait for regular pages to load
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    // Log page information for debugging
    const title = await page.title();
    console.log(`   Title: ${title}`);

    // Take full-page screenshot
    const fullScreenshotBuffer = await page.screenshot({
      fullPage: true,
      type: 'png',
    });

    // Convert full screenshot to WebP
    await sharp(fullScreenshotBuffer).webp({ quality: 90 }).toFile(`public/${filename}-full.webp`);

    // Take cropped screenshot (social media dimensions)
    const croppedScreenshotBuffer = await page.screenshot({
      fullPage: false,
      clip: { x: 0, y: 0, width: 1200, height: 630 },
      type: 'png',
    });

    // Convert cropped screenshot to WebP
    await sharp(croppedScreenshotBuffer).webp({ quality: 90 }).toFile(`public/${filename}.webp`);

    // Create OG image from home screenshot
    if (filename === 'home-screenshot') {
      await sharp(croppedScreenshotBuffer).webp({ quality: 90 }).toFile('public/og-image.webp');
      console.log('   ✓ Created og-image.webp');
    }

    console.log(`   ✓ Saved ${filename}.webp and ${filename}-full.webp`);
  }

  await browser.close();
  console.log('🎉 Screenshot generation complete!');
}

takeScreenshots().catch(console.error);
