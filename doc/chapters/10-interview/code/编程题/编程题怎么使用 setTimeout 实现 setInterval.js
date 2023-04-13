function mySetInterval(fn, timeout) {
    var timer = {
        flag: true
    }

    function interval() {
        if (timer.flag) {
            fn()
            setTimeout(interval, timeout)
        }
    }

    setTimeout(interval, timeout);

    return timeout
}