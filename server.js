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
      'A creative portfolio website built with React, TypeScript, and running with Vite. Includes a fun little fridge with some easter eggs and a real-time collaborative sound board',
    image: '/home-screenshot.webp',
  },
  '/fridge': {
    title: 'Fridge | kd davis',
    description:
      "Interactive fridge-themed contact page with magnetic notes and contact form. Part of kd davis's creative portfolio website.",
    image: '/fridge-screenshot.webp',
  },
  '/more-cowbell': {
    title: 'More Cowbell | kd davis',
    description:
      'Real-time collaborative emoji sound board app. Join a room and play sounds together with others in real-time using PartyKit.',
    image: '/room-screenshot.webp',
  },
};

function handleMetaPage(req, res, meta) {
  const template = fs.readFileSync(path.resolve('dist/index.html'), 'utf-8');

  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      '<meta property="og:image" content="https://kd.works/og-image.webp" />',
      `<meta property="og:image" content="https://kd.works${meta.image}" />`
    )
    .replace(
      '<meta property="twitter:image" content="https://kd.works/og-image.webp" />',
      `<meta property="twitter:image" content="https://kd.works${meta.image}" />`
    )
    .replace('<meta property="og:title" content="kd davis" />', `<meta property="og:title" content="${meta.title}" />`)
    .replace(
      '<meta property="twitter:title" content="kd davis" />',
      `<meta property="twitter:title" content="${meta.title}" />`
    )
    .replace(
      /A creative portfolio website built with React, TypeScript, and running with Vite\. Includes a fun little fridge with some easter eggs and a real-time collaborative sound board/g,
      meta.description
    );

  res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
}

app.get('/', (req, res) => {
  handleMetaPage(req, res, pageMeta['/']);
});
app.get('/fridge', (req, res) => {
  handleMetaPage(req, res, pageMeta['/fridge']);
});
app.get('/more-cowbell', (req, res) => {
  handleMetaPage(req, res, pageMeta['/more-cowbell']);
});

// Catch-all handler for client-side routing
app.use((req, res) => {
  const template = fs.readFileSync(path.resolve('dist/index.html'), 'utf-8');
  res.status(200).set({ 'Content-Type': 'text/html' }).send(template);
});

app.listen(port, () => {
  console.log(`SSR server running on http://localhost:${port}`);
});
