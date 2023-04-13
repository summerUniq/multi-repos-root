self.addEventListener('install', e => {
    console.log('service worker install');
    e.waitUntil(caches.open('my-cache').then(function (cache) {
        console.log('开启cache');
        return cache.addAll(['./index.html', './index.js'])
    }))
})


self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            if (response) {
                return response
            }
            // 没有缓存，获取资源并进行缓存
            return fetch(e.request).then(res => {
                if (!res || res.status !== 200) {
                    return res
                }

                caches.open('my-cache').then((cache) => {
                    cache.put(e.request, res)
                })

                return res.clone()

            })
        })
    )
})