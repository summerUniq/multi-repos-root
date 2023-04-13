Array.prototype.myReduce = function (callback, initialValue) {
    if (this == undefined) {
        throw new Error('this is null or not defined')
    }
    if (typeof callback !== 'function') {
        throw new Error('callback is not a function')
    }
    const O = Object(this)
    const len = O.length >>> 0
    let accumulator = initialValue
    let k = 0
    if (accumulator === undefined) {
        while (k < len && !(k in O)) {
            k++
        }
        if (k >= len) {
            throw new Error('Reduce of empty array with no initial value')
        }
        accumulator = O[k++]
    }

    while (k < len) {
        if (k in O) {
            accumulator = callback.call(undefined, accumulator, O[k], k, O)
        }
        k++
    }
    return accumulator
}

