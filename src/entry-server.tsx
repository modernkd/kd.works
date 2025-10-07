import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import './globals.css';
import Layout from './pages/Layout';
import MoreCowbellLayout from './pages/more-cowbell/Layout';
import Home from './pages/Home';
import Fridge from './pages/Fridge';
import MoreCowbellHome from './pages/more-cowbell/Home';

export function render(url: string) {
  const helmetContext = {};

  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/fridge" element={<Layout />}>
              <Route index element={<Fridge />} />
            </Route>
            <Route path="/more-cowbell" element={<MoreCowbellLayout />}>
              <Route index element={<MoreCowbellHome />} />
            </Route>
          </Routes>
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  // Extract helmet data
  const { helmet } = helmetContext as any;

  return {
    html,
    helmet: {
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
    },
  };
}
