const CACHE_NAME = "zaylio-v1";
const urlsToCache = ["/", "/index.html", "/manifest.json", "/logo.png"];

// Installation du Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Cache ouvert");
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // Force l'activation immédiate
  );
});

// Activation du Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim()) // Prend le contrôle immédiatement
  );
});

// Gestion des requêtes
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retourne la réponse du cache si elle existe
      if (response) {
        return response;
      }
      // Sinon, fait la requête réseau
      return fetch(event.request).then((response) => {
        // Vérifie si la réponse est valide
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        // Clone la réponse car elle ne peut être utilisée qu'une fois
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});
