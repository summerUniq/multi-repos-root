function shallowCopy(obj) {
    const newObj = {}
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            newObj[k] = obj[k]
        }
    }
    return newObj
}

function deepClone(obj, hash = new WeakMap()) {

    if (obj == null) {
        return obj
    }

    if (obj instanceof Date) { return new Date() }
    if (obj instanceof RegExp) { return new RegExp() }

    if (typeof obj !== 'object') { return obj }

    if (hash.get(obj)) {
        return hash.get(obj)
    }

    let cloneObj = new obj.constructor()

    hash.set(obj, cloneObj)

    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            cloneObj[k] = deepClone(obj[k], hash)
        }
    }

    return cloneObj

}