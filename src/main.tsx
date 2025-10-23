import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorBoundary from './components/ui/ErrorBoundary';
import App from './App';
import { queryClient } from './lib/queryClient';
import { randomizeBackground } from './utils/backgroundUtils';
import './index.css';
import './globals.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

randomizeBackground();

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.type === 'attributes' &&
      (mutation.attributeName === 'data-theme' || mutation.attributeName === 'data-fridge-theme')
    ) {
      setTimeout(randomizeBackground, 10);
    }
  });
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-theme', 'data-fridge-theme'],
});

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              if (confirm('New version available! Click OK to refresh and use the latest version.')) {
                window.location.reload();
              }
            }
          });
        }
      });
    });
  }
};

if (window.requestIdleCallback) {
  window.requestIdleCallback(registerServiceWorker);

  window.addEventListener('load', () => {
    setTimeout(registerServiceWorker, 1);
  });
}
