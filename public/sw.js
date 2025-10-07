const CACHE_NAME = 'kd-works-v2';
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/robots.txt',
  '/og-image.webp',
  '/og-image.png', // Fallback for PWA compatibility
  '/profile.webp',
  '/home-screenshot.webp',
  '/fridge-screenshot.webp',
  '/room-screenshot.webp',
  '/window.svg',
  '/globe.svg',
  '/favicon.svg',
  // Sounds
  '/sounds/10-mario-died.mp3',
  '/sounds/applause.mp3',
  '/sounds/boxing-bell.mp3',
  '/sounds/bye-bye-bye.mp3',
  '/sounds/cricket.mp3',
  '/sounds/hello-there.mp3',
  '/sounds/loser.mp3',
  '/sounds/nooo.mp3',
  '/sounds/ooof.mp3',
  '/sounds/sad-trombone.mp3',
  '/sounds/sparkles.mp3',
  '/sounds/spongebob-fail.mp3',
  '/sounds/tada.mp3',
  '/sounds/technologia.m4a',
  '/sounds/wait-what.mp3',
  '/sounds/wow-incredible.mp3',
  '/sounds/wow.mp3',
  '/sounds/yahoo.mp3',
  '/sounds/yodel.mp3',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_CACHE_URLS)));
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache with different strategies
self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Different caching strategies for different types of resources
  if (isStaticAsset(event.request)) {
    // Cache-first strategy for static assets
    event.respondWith(cacheFirst(event.request));
  } else if (isImageRequest(event.request)) {
    // Stale-while-revalidate for images
    event.respondWith(staleWhileRevalidate(event.request));
  } else if (isNavigationRequest(event.request)) {
    // Network-first with fallback for navigation
    event.respondWith(networkFirstWithFallback(event.request));
  } else {
    // Default network-first strategy
    event.respondWith(networkFirst(event.request));
  }
});

// Helper functions for different caching strategies
async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached || fetch(request);
}

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cached = await caches.match(request);
    return cached || new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  const networkFetch = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.status === 200) {
        const cache = caches.open(CACHE_NAME);
        cache.then((c) => c.put(request, networkResponse.clone()));
      }
      return networkResponse;
    })
    .catch(() => null);

  return cached || networkFetch;
}

async function networkFirstWithFallback(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Try cache first, then fallback to offline page
    const cached = await caches.match(request);
    if (cached) return cached;

    // Return cached index.html as fallback for SPA routing
    const indexCached = await caches.match('/index.html');
    return indexCached || new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

// Helper functions to identify request types
function isStaticAsset(request) {
  return (
    request.url.includes('/assets/') ||
    request.url.includes('.js') ||
    request.url.includes('.css') ||
    request.url.includes('.svg') ||
    request.url.includes('.ico')
  );
}

function isImageRequest(request) {
  return (
    request.url.includes('.webp') ||
    request.url.includes('.avif') ||
    request.url.includes('.png') ||
    request.url.includes('.jpg') ||
    request.url.includes('.jpeg')
  );
}

function isNavigationRequest(request) {
  return (
    request.mode === 'navigate' || (request.method === 'GET' && request.headers.get('accept').includes('text/html'))
  );
}
