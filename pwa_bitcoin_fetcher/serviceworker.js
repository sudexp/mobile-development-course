const cacheName = 'bitcoin-v1';
const filesToCache = [
  './',
  './index.html',
  './styles.css',
  './manifest.json',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-256x256.png',
  './icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  console.log('[ServiceWorker] install');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('[ServiceWorker] caching');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] activating');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cName => {
          cName !== cacheName && caches.delete(cName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('[ServiceWorker] fetch event for ', event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        response && (console.log('Found ', event.request.url, ' in cache'), response);
        console.log('Network request for ', event.request.url);
        return fetch(event.request);
      })
      .catch(error => {
        console.log(error);
      })
  );
});
