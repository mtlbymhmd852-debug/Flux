// Minimal service worker: makes the page installable as an app. It never caches, so updates and calls always use the live server.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
