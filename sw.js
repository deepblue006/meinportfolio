// Mein Portfolio – Service Worker: App offline verfügbar, Kurse immer frisch aus dem Netz
const CACHE = "mein-portfolio-v8";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"];
const API_HOSTS = ["api.coingecko.com", "www.alphavantage.co", "api.frankfurter.dev", "api.frankfurter.app"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || API_HOSTS.includes(url.hostname)) return; // Kurse nie aus dem Cache
  // App-Dateien und Schriften: erst Netz, bei Offline der Cache
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});
