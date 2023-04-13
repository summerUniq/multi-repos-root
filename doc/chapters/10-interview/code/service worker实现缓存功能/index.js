if (navigator.serviceWorker) {
    navigator.serviceWorker
        .register('./sw.js')
        .then(function (registration) {
            console.log('service worker 注册成功');
        })
        .catch(function (registration) {
            console.log('service worker注册失败');
        })
}
