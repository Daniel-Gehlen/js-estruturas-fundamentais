// um Service Worker que lida com o cache de recursos, permitindo uma experiência offline:
const CACHE_NAME = 'my-cache-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
                '/offline.html', // Página offline
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        }).catch(() => {
            return caches.match('/offline.html'); // Retorna a página offline se a rede falhar
        })
    );
});