// sw.js - v10 - clears ALL previous caches on install
const CACHE = 'slough-v10';
const LOCAL = ['index.html','style.css','app.js','manifest.json','icon-192.png','icon-512.png'];

self.addEventListener('install', e => {
  self.skipWaiting(); // take over immediately, don't wait
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.allSettled(LOCAL.map(u => c.add(u))))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE && k !== 'map-tiles').map(k => {
        console.log('Deleting old cache:', k);
        return caches.delete(k);
      }))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('tile.openstreetmap.org')) {
    e.respondWith(
      caches.open('map-tiles').then(c =>
        c.match(e.request).then(hit => hit || fetch(e.request).then(r => {
          if (r.ok) c.put(e.request, r.clone()); return r;
        }))
      )
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request))
  );
});
