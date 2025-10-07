import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.resolve('dist')));

// Static meta tag injection for different pages
const pageMeta = {
  '/': {
    title: 'Home | kd davis',
    description:
      'A creative portfolio website featuring a fridge-themed design with interactive elements, built with Vite and TypeScript. Includes a real-time collaborative sound board app powered by PartyKit.',
    image: '/home-screenshot.png',
  },
  '/fridge': {
    title: 'Fridge | kd davis',
    description:
      "Interactive fridge-themed contact page with magnetic notes and contact form. Part of kd davis's creative portfolio website.",
    image: '/fridge-screenshot.png',
  },
  '/more-cowbell': {
    title: 'More Cowbell | kd davis',
    description:
      'Real-time collaborative emoji sound board app. Join a room and play sounds together with others in real-time using PartyKit.',
    image: '/room-screenshot.png',
  },
};

app.get(['/', '/fridge', '/more-cowbell'], (req, res) => {
  const template = fs.readFileSync(path.resolve('dist/index.html'), 'utf-8');
  const meta = pageMeta[req.path] || pageMeta['/'];

  // Replace title
  let renderedHtml = template.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);

  // Replace og:image
  renderedHtml = renderedHtml.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${meta.image}" />`
  );

  // Replace twitter:image
  renderedHtml = renderedHtml.replace(
    /<meta property="twitter:image" content="[^"]*" \/>/,
    `<meta property="twitter:image" content="${meta.image}" />`
  );

  // Replace og:title
  renderedHtml = renderedHtml.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${meta.title}" />`
  );

  // Replace twitter:title
  renderedHtml = renderedHtml.replace(
    /<meta property="twitter:title" content="[^"]*" \/>/,
    `<meta property="twitter:title" content="${meta.title}" />`
  );

  // Replace og:description
  renderedHtml = renderedHtml.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${meta.description}" />`
  );

  // Replace twitter:description
  renderedHtml = renderedHtml.replace(
    /<meta property="twitter:description" content="[^"]*" \/>/,
    `<meta property="twitter:description" content="${meta.description}" />`
  );

  res.status(200).set({ 'Content-Type': 'text/html' }).send(renderedHtml);
});

// Catch-all handler for client-side routing (more-cowbell rooms, etc.)
app.use((req, res) => {
  const template = fs.readFileSync(path.resolve('dist/index.html'), 'utf-8');
  res.status(200).set({ 'Content-Type': 'text/html' }).send(template);
});

app.listen(port, () => {
  console.log(`SSR server running on http://localhost:${port}`);
});
