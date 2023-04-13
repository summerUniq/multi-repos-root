function throttle(fn, wait) {
    let startTime = Date.now()
    let timeOut;
    return function (...args) {
        if (timeOut) {
            clearTimeout(timeOut)
            let currentTime = Date.now()
            let remainingTime = wait - (currentTime - startTime)
            if (remainingTime <= 0) {
                fn.apply(this, args)
                startTime = Date.now()
            } else {
                timeOut = setTimeout(fn, remainingTime)
            }
        }
    }
}

function throttle1(fn, wait) {
    let flag = true
    return function () {
        if (!flag) { return }
        flag = false
        setTimeout(() => {
            fn.apply(this, arguments)
            flag = true
        }, wait)
    }
}