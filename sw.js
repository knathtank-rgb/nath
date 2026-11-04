// Service worker minimal — requis par Chrome pour proposer "Installer l'application".
// N'intercepte rien et ne met rien en cache : chaque requête part directement au réseau.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
