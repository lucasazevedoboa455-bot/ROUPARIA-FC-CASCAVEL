const CACHE_NAME = 'roupeiro-do-brasil-v18';
const APP_FILES = ['./', './index.html', './manifest.json', './app-icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response && response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    }
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html'))));
});
self.addEventListener('push', event => {
 let dados = {};
 try { dados = event.data ? event.data.json() : {}; }
 catch (_) { dados = { body: event.data ? event.data.text() : '' }; }
 const titulo = dados.title || 'Roupeiros Brasil';
 const opcoes = {
  body: dados.body || 'Você tem um novo aviso da rouparia.',
  icon: './app-icon.svg',
  badge: './app-icon.svg',
  data: { url: dados.url || './#/app' },
  tag: dados.tag || 'roupeiros-brasil-aviso',
  renotify: false
 };
 event.waitUntil(self.registration.showNotification(titulo, opcoes));
});
self.addEventListener('notificationclick', event => {
 event.notification.close();
 const destino = new URL(event.notification.data?.url || './#/app', self.location.origin).href;
 event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(lista => {
  for (const cliente of lista) {
   if ('focus' in cliente) {
    cliente.navigate(destino);
    return cliente.focus();
   }
  }
  return clients.openWindow(destino);
 }));
});
