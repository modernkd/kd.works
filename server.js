import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.resolve('dist')));

// SSR handler for home page only
app.get('/', async (req, res) => {
  try {
    const { render } = await import('./dist/entry-server.js');
    const { html } = render(req.url);

    if (html) {
      // SSR the home page
      const template = fs.readFileSync(path.resolve('dist/index.html'), 'utf-8');
      const renderedHtml = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
      res.status(200).set({ 'Content-Type': 'text/html' }).send(renderedHtml);
    } else {
      // Client-side routing for more-cowbell routes
      const template = fs.readFileSync(path.resolve('dist/index.html'), 'utf-8');
      res.status(200).set({ 'Content-Type': 'text/html' }).send(template);
    }
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Catch-all handler for client-side routing
app.use((req, res) => {
  const template = fs.readFileSync(path.resolve('dist/index.html'), 'utf-8');
  res.status(200).set({ 'Content-Type': 'text/html' }).send(template);
});

app.listen(port, () => {
  console.log(`SSR server running on http://localhost:${port}`);
});
