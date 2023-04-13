function isArray(arr) {
    return Array.isArray(arr)
}

function isArray2(arr) {
    if (arr == null) {
        return false
    }
    if (typeof arr !== 'object') {
        return false
    }
    return Object.prototype.toString.call(arr).slice(-6, -1) === 'Array'
}

function isArray3(arr) {
    return arr instanceof Array
}

const a = []

console.log(isArray2(a));