const puppeteer = require("puppeteer");

async function scrapeSite(url, name) {
  console.log(`\n=== Scraping ${name}: ${url} ===`);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle2" });

    // Get the HTML content
    const html = await page.content();
    console.log("HTML Content:");
    console.log(html.substring(0, 1000) + "...");

    // Get all CSS content
    const cssContent = await page.evaluate(() => {
      const styles = [];
      // Get inline styles
      const styleElements = document.querySelectorAll("style");
      styleElements.forEach((style) => styles.push(style.innerHTML));

      // Get linked stylesheets
      const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
      linkElements.forEach((link) => {
        if (link.href) styles.push(`/* External stylesheet: ${link.href} */`);
      });

      return styles.join("\n\n");
    });

    console.log("\nCSS Content:");
    console.log(cssContent.substring(0, 1000) + "...");

    // Get page title and meta description
    const title = await page.title();
    const description = await page
      .$eval('meta[name="description"]', (el) => el.content)
      .catch(() => "No description");

    console.log(`\nTitle: ${title}`);
    console.log(`Description: ${description}`);
  } catch (error) {
    console.error(`Error scraping ${name}:`, error.message);
  } finally {
    await browser.close();
  }
}

async function main() {
  const sites = [
    { url: "https://kd.works", name: "KD Works" },
    {
      url: "https://codepen.io/cybermandu/full/wPoWGw",
      name: "CodePen Cybermandu",
    },
    {
      url: "https://codepen.io/dariocorsi/full/YNXvVM",
      name: "CodePen Dario Corsi",
    },
    {
      url: "https://codepen.io/NyX/pen/MJyQXy",
      name: "CodePen NyX",
    },
  ];

  for (const site of sites) {
    await scrapeSite(site.url, site.name);
  }
}

main().catch(console.error);
