const CACHE_NAME = 'kd-works-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/og-image.png',
  '/profile.jpeg',
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

// Fetch event - serve from cache if available, otherwise network
self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return (
          response ||
          fetch(event.request).then((networkResponse) => {
            // Cache successful responses
            if (networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return networkResponse;
          })
        );
      })
      .catch(() => {
        // Offline fallback - could return a custom offline page
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      })
  );
});
