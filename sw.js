// VarOrga Survie : tout est mis en cache à l'installation, l'appli marche ensuite sans réseau.
var VERSION = "vs-v2";
var FICHIERS = [
  "./",
  "index.html",
  "style.css",
  "app.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "data/fiches-eau-feu.js",
  "data/fiches-abri-nourriture.js",
  "data/fiches-orientation-climat.js",
  "data/fiches-secours.js",
  "data/fiches-crise-mental-materiel.js",
  "data/fiches-potager-1.js",
  "data/fiches-potager-2.js",
  "data/fiches-outils.js"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FICHIERS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Cache d'abord (rapide et hors ligne), mise à jour en arrière-plan quand le réseau est là.
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(VERSION).then(function (c) {
    return c.match(e.request, { ignoreSearch: true }).then(function (r) {
      var reseau = fetch(e.request).then(function (rep) {
        if (rep && rep.ok) c.put(e.request, rep.clone());
        return rep;
      }).catch(function () { return r; });
      return r || reseau;
    });
  }));
});
