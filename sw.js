// Service worker minimal — requis par Chrome pour proposer "Installer l'application".
// Ne met rien en cache : chaque ouverture recharge la version la plus récente.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
