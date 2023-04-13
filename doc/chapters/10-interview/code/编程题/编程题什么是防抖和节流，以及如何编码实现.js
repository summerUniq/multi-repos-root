// 节流
function throttle1(fn, delay = 500) {
    let oldTime = Date.now()
    return function (...params) {
        let newTime = Date.now()
        if (newTime - oldTime >= delay) {
            fn.apply(null, params)
            oldTime = Date.now()
        }
    }
}

function throttle1(fn, delay) {
    let timer = null
    return function (...params) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(null, params)
                timer = null
            }, delay);
        }
    }
}

function throttled(fn, delay) {
    let startTime = Date.now()
    let timer = null

    return function (...params) {
        let currentTime = Date.now()
        const remaining = delay - (currentTime - startTime)
        const context = this
        clearTimeout(timer)
        if (remaining <= 0) {
            fn.apply(context, params)
            startTime = Date.now()
        } else {
            timer = setTimeout(fn, remaining)
        }
    }
}
// 防抖
function debounce1(fn, wait) {
    let timer;
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, wait)
    }
}

function debounce(fn, wait, immediate) {
    let timeout;

    return function () {
        const context = this
        const args = arguments
        if (timeout) { clearTimeout(timeout) }

        if (immediate) {
            const callnow = !timeout
            timeout = setTimeout(function () {
                timeout = null
            }, wait)
            if (callnow) {
                fn.apply(context, args)
            }

        } else {
            timeout = setTimeout(function () {
                fn.apply(context, args)
            }, wait)
        }
    }
}