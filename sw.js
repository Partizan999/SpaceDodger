const CACHE = "spacedodger-v20";
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(["/SpaceDodger/", "/SpaceDodger/index.html", "/SpaceDodger/manifest.json"]))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));