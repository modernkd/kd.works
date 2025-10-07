import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import App from './App';
import './index.css';
import './globals.css';
import './i18n';
import { performanceMonitor } from './lib/performance';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// Defer service worker registration to avoid blocking initial load
// Use requestIdleCallback for better performance
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);

        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker installed, prompt user to refresh
                if (confirm('New version available! Click OK to refresh and use the latest version.')) {
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  }
};

// Register SW after page load and when browser is idle
if (window.requestIdleCallback) {
  window.requestIdleCallback(registerServiceWorker);
} else {
  // Fallback for browsers that don't support requestIdleCallback
  window.addEventListener('load', () => {
    setTimeout(registerServiceWorker, 1);
  });
}
