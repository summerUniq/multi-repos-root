Array.prototype.myMap = function (callback, thisArg) {
    if (this == undefined) {
        throw new Error('this is null or not defined')
    }
    if (typeof callback !== 'function') {
        throw new Error(callback + 'is not a function')
    }
    const res = []

    const O = Object(this)
    const len = O.length >>> 0
    for (let i = 0; i < len; i++) {
        if (i in O) {
            res[i] = callback.call(thisArg, O[i], i, this)
        }
    }

    return res
}

// Array.prototype.map()
const arr = [1, 2]
console.log(arr.myMap((v, i) => v + 1));