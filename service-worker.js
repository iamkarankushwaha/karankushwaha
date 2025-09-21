self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("my-site-cache").then(cache => {
      return cache.addAll([
        "/",          // homepage
        "/index.html",
        "/styles.css",
        "/script.js",
        "/Assets-Image/karan kushwaha-brand-logo.svg",  // preload your logo/icons
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
