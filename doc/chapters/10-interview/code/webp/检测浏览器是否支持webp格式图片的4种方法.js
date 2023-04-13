// 方法一：

function check_webp_support_canvas() {
    const canvasEl = document.querySelector('canvas')
    if (canvasEl.getContext && canvasEl.getContext('2d')) {
        return canvasEl.toDataURL('image/webp').indexOf('webp') > -1
    }
    return false
}


// 方法二：

function check_webp_feature(feature, callback) {
    var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    const img = new Image()
    img.onload = function () {
        const imgWidth = img.width
        const imgHeight = img.height
        if (imgWidth > 0 && imgHeight > 0) {
            callback(feature, true)
        } else {
            callback(feature, false)
        }
    }
    img.onerror = function () {
        callback(feature, false)
    }
    img.src = "data:image/webp;base64," + kTestImages[feature]
}

check_webp_feature('loosy', function (feature, isSupport) {
    if (isSupport) {
        // TODO:
    }
})

// 服务端通过request header 头部字段accept内容是否包含 image/webp来判断是否支持webp

// html5的picture标签
