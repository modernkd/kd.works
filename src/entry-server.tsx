import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './index.css';
import './globals.css';
import './i18n';

// Layouts and Pages for SSR (only home page)
const Layout = lazy(() => import('./pages/Layout'));
const Home = lazy(() => import('./pages/Home'));

export function render(url: string) {
  // Only SSR the home page - more-cowbell routes are client-only
  if (url === '/' || url === '') {
    const html = renderToString(
      <React.StrictMode>
        <StaticRouter location="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </Suspense>
        </StaticRouter>
      </React.StrictMode>
    );
    return { html };
  }

  // For all other routes (more-cowbell), return empty HTML - client will handle
  return { html: '' };
}
