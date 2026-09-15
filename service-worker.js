const CACHE_NAME = "urbancut-cache-v3";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./services.html",
  "./produits.html",
  "./reservation.html",

  "./css/style.css",

  "./js/script.js",
  "./js/validationReservation.js",

  "./images/LogoSite.png",

  // Images accueil
  "./images/Fadeimg1.png",
  "./images/Fadeimg2.png",
  "./images/Fadeimg3.png",
  "./images/Fadeimg4.png",

  // Images services
  "./images/service-classique.png",
  "./images/service-fade.png",
  "./images/service-barbe.png",
  "./images/CoupeETbarbe.png",
  "./images/service-contour.png",
  "./images/service-enfants.png",

  // Images produits
  "./images/produit-pommade.png",
  "./images/produit-huile.png",
  "./images/produit-shampoing.png",
  "./images/produit-creme.png",
  "./images/produit-huile-barbe.png",
  "./images/produit-gel.png",

  // Icônes PWA
  "./images/icons/icon-144.png",
  "./images/icons/icon-192.png",
  "./images/icons/icon-512.png",

  "./images/screenshot-accueil.png",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES_TO_CACHE);
    }),
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }),
  );
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./service-worker.js");
  });
}
