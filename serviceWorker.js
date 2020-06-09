const staticPwaTest = "dev-pwa-test-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPwaTest).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
