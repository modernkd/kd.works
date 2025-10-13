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
    image: 'https://kd.works/home-screenshot.webp',
  },
  '/fridge': {
    title: 'Fridge | kd davis',
    description:
      "Interactive fridge-themed contact page with magnetic notes and contact form. Part of kd davis's creative portfolio website.",
    image: 'https://kd.works/fridge-screenshot.webp',
  },
  '/more-cowbell': {
    title: 'More Cowbell | kd davis',
    description:
      'Real-time collaborative emoji sound board app. Join a room and play sounds together with others in real-time using PartyKit.',
    image: 'https://kd.works/more-cowbell-screenshot.webp',
  },
};

function handleMetaPage(req, res, meta) {
  const template = fs.readFileSync(path.resolve('dist/index.html'), 'utf-8');

  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      '<meta property="og:image" content="/og-image.webp" />',
      `<meta property="og:image" content="${meta.image}" />`
    )
    .replace(
      '<meta property="twitter:image" content="/og-image.webp" />',
      `<meta property="twitter:image" content="${meta.image}" />`
    )
    .replace('<meta property="og:title" content="kd davis" />', `<meta property="og:title" content="${meta.title}" />`)
    .replace(
      '<meta property="twitter:title" content="kd davis" />',
      `<meta property="twitter:title" content="${meta.title}" />`
    )
    .replace(
      '<meta property="og:description" content="A creative portfolio website built with React, TypeScript, and running with Vite. Includes a fun little fridge with some easter eggs and a real-time collaborative sound board" />',
      `<meta property="og:description" content="${meta.description}" />`
    )
    .replace(
      '<meta property="twitter:description" content="A creative portfolio website built with React, TypeScript, and running with Vite. Includes a fun little fridge with some easter eggs and a real-time collaborative sound board" />',
      `<meta property="twitter:description" content="${meta.description}" />`
    )
    .replace(
      /<meta\s+name="description"\s+content="A creative portfolio website built with React, TypeScript, and running with Vite\. Includes a fun little fridge with some easter eggs and a real-time collaborative sound board"[^>]*>/,
      `<meta name="description" content="${meta.description}" />`
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

// Handle room pages dynamically
app.get('/more-cowbell/room/:room', (req, res) => {
  const room = req.params.room;
  const meta = {
    title: `Room: ${room} | kd davis`,
    description:
      'Real-time collaborative emoji sound board. Play sounds together with others in this room using PartyKit.',
    image: 'https://kd.works/room-screenshot.webp',
  };
  handleMetaPage(req, res, meta);
});

// Catch-all handler for client-side routing
app.use((req, res) => {
  const template = fs.readFileSync(path.resolve('dist/index.html'), 'utf-8');
  res.status(200).set({ 'Content-Type': 'text/html' }).send(template);
});

app.listen(port, () => {
  console.log(`SSR server running on http://localhost:${port}`);
});
