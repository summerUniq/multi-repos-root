Array.prototype.myForEach = function (callback, thisArgs) {
    if (this == undefined) {
        throw new Error('this is undefined or null')
    }
    if (typeof callback === 'function') {
        throw new Error('callback is not a function')
    }
    const O = Object(this)
    const len = O.length >>> 0
    for (let i = 0; i < len; i++) {
        if (i in O) {
            callback.call(thisArgs, O[i], i, this)
        }
    }
}