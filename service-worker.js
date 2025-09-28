// self.addEventListener("install", event => {
//   event.waitUntil(
//     caches.open("my-site-cache").then(cache => {
//       return cache.addAll([
//         "/",
//         "index.html",
//         "styles/style.css",
//         "styles/responsive-style.css",
//         "Scripts/script.js",
//         "Scripts/contact.js",
//         "Assets-Image/karan kushwaha-brand-logo.svg",
//       ]);
//     })
//   );
// });

// self.addEventListener("fetch", event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       return response || fetch(event.request);
//     })
//   );
// });



self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => caches.delete(key)))
    )
  );
});
