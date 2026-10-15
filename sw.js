// Service worker di Effetto Serra: rende l'app disponibile anche offline.
// Quando aggiorni il sito, cambia il numero di versione qui sotto.
const VERSIONE = 'effetto-serra-v33';
const FILE_BASE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSIONE).then(c => c.addAll(FILE_BASE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(chiavi => Promise.all(chiavi.filter(k => k !== VERSIONE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Pagina: prima la rete (contenuti sempre aggiornati), poi la copia salvata se sei offline
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(r => { const copia = r.clone(); caches.open(VERSIONE).then(c => c.put('./index.html', copia)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Icone, font e altri file: prima la copia salvata, poi la rete
  if (url.origin === location.origin || url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com')) {
    e.respondWith(
      caches.match(req).then(salvato => salvato || fetch(req).then(r => {
        if (r.ok || r.type === 'opaque') { const copia = r.clone(); caches.open(VERSIONE).then(c => c.put(req, copia)); }
        return r;
      }))
    );
  }
});
