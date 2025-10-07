import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import LoadingScreen from './components/LoadingScreen';
import './index.css';
import './globals.css';
// Note: i18n is not imported in SSR to avoid issues

// Layouts and Pages for SSR
const Layout = lazy(() => import('./pages/Layout'));
const MoreCowbellLayout = lazy(() => import('./pages/more-cowbell/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Fridge = lazy(() => import('./pages/Fridge'));
const MoreCowbellHome = lazy(() => import('./pages/more-cowbell/Home'));

export function render(url: string) {
  const helmetContext = {};

  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <Suspense fallback={<LoadingScreen />}>
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
          </Suspense>
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
