import puppeteer from 'puppeteer';
import { spawn } from 'child_process';

async function takeScreenshots() {
  console.log('Using existing dev server on port 3000');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Listen for console messages and errors
  page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', (error) => console.log('PAGE ERROR:', error.message));

  // Set viewport for consistent screenshots
  await page.setViewport({ width: 1200, height: 630 });

  const baseUrl = 'http://localhost:3000';

  // Pages to screenshot
  const pages = [
    { path: '/', filename: 'home-screenshot.png' },
    { path: '/fridge', filename: 'fridge-screenshot.png' },
    { path: '/more-cowbell', filename: 'more-cowbell-screenshot.png' },
    { path: '/more-cowbell/room/los-pollos-hermanos', filename: 'room-screenshot.png', nickname: 'walter white' },
  ];

  for (const { path, filename, nickname } of pages) {
    console.log(`Taking screenshot of ${path}...`);

    console.log(`Navigating to ${baseUrl}${path}`);
    await page.goto(`${baseUrl}${path}`, { waitUntil: 'networkidle2' });

    if (nickname) {
      console.log(`Signing in with nickname: ${nickname}`);
      await page.waitForSelector('#nickname');
      await page.type('#nickname', nickname);
      await page.click('button[type="submit"]');
      console.log('Signed in, waiting for room to load...');
      // Wait for room to load
      await new Promise((resolve) => setTimeout(resolve, 5000));
    } else {
      console.log('Page loaded, waiting for content...');
      // Wait a bit for any animations to settle
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    // Check if page has content
    const title = await page.title();
    const bodyText = await page.evaluate(() => document.body.innerText.substring(0, 200));
    console.log(`Page title: "${title}"`);
    console.log(`Body preview: "${bodyText}..."`);
    console.log('Taking screenshots...');

    // Take full page screenshot for debugging
    await page.screenshot({
      path: `public/${filename.replace('.png', '-full.png')}`,
      fullPage: true,
    });

    // Take the cropped version for social media
    await page.screenshot({
      path: `public/${filename}`,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1200, height: 630 },
    });

    console.log(`Saved ${filename}`);
  }

  await browser.close();
  console.log('All screenshots taken!');
}

takeScreenshots().catch(console.error);
