import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ui/ErrorBoundary';
import App from './App';
import './index.css';
import './globals.css';
import './i18n';

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

// Randomize green splotches for light mode background
const randomizeBackground = () => {
  const root = document.documentElement;
  const gradients = [
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-1').trim() || 'rgba(34, 139, 34, 0.15)',
      size: '80px 80px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-2').trim() || 'rgba(50, 205, 50, 0.601)',
      size: '60px 60px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-3').trim() || 'rgba(0, 128, 0, 0.1)',
      size: '90px 90px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-4').trim() || 'rgba(34, 139, 34, 0.585)',
      size: '50px 50px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-5').trim() || 'rgba(50, 205, 50, 0.12)',
      size: '70px 70px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-6').trim() || 'rgba(0, 128, 0, 0.281)',
      size: '80px 80px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-7').trim() || 'rgba(34, 139, 34, 0.1)',
      size: '65px 65px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-8').trim() || 'rgba(50, 205, 50, 0.666)',
      size: '55px 55px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-9').trim() || 'rgba(34, 139, 34, 0.08)',
      size: '75px 75px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-10').trim() || 'rgba(50, 205, 50, 0.05)',
      size: '85px 85px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-11').trim() || 'rgba(0, 128, 0, 0.15)',
      size: '45px 45px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-12').trim() || 'rgba(34, 139, 34, 0.25)',
      size: '95px 95px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-13').trim() || 'rgba(50, 205, 50, 0.09)',
      size: '60px 60px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-14').trim() || 'rgba(0, 128, 0, 0.12)',
      size: '70px 70px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-15').trim() || 'rgba(34, 139, 34, 0.18)',
      size: '50px 50px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-16').trim() || 'rgba(50, 205, 50, 0.07)',
      size: '80px 80px',
    },
    {
      color:
        getComputedStyle(root).getPropertyValue('--splotch-linear').trim() ||
        'linear-gradient(135deg, rgba(34, 139, 34, 0.05), rgba(50, 205, 50, 0.05))',
      size: '100% 100%',
      isLinear: true,
    },
  ];

  const radialGradients = gradients.slice(0, 16).map((g) => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    return `radial-gradient(circle at ${x}% ${y}%, ${g.color} 0%, transparent 50%)`;
  });

  const linear = gradients[8].color;
  const backgroundImage = [...radialGradients, linear].join(', ');
  const backgroundSize = gradients.map((g) => g.size).join(', ');
  const backgroundPosition = gradients
    .map(() => `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`)
    .join(', ');

  document.body.style.backgroundImage = backgroundImage;
  document.body.style.backgroundSize = backgroundSize;
  document.body.style.backgroundPosition = backgroundPosition;
  document.body.style.backgroundRepeat = 'no-repeat';
};

randomizeBackground();

// Listen for theme changes to regenerate background
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.type === 'attributes' &&
      (mutation.attributeName === 'data-theme' || mutation.attributeName === 'data-fridge-theme')
    ) {
      // Small delay to ensure CSS variables are updated
      setTimeout(randomizeBackground, 10);
    }
  });
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-theme', 'data-fridge-theme'],
});

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
  // Fallback for browsers that don't support requestIdleCallback
  window.addEventListener('load', () => {
    setTimeout(registerServiceWorker, 1);
  });
}
