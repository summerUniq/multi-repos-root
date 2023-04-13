function cloneDeep(target, hasMap = new WeakMap()) {
    if (typeof target !== 'object' || target === null) {
        return target
    }
    if (hasMap.has(target)) {
        return hasMap.get(target)
    }
    const cloneTarget = Array.isArray(target) ? [] : {}
    hasMap.set(target, cloneTarget)

    const symbols = Object.getOwnPropertySymbols(target)
    if (symbols.length) {
        symbols.forEach((s) => {
            if (typeof target[s] === 'object' && target[s] !== null) {
                cloneTarget[s] = cloneDeep(target[s], hasMap)
            } else {
                cloneTarget[s] = target[s]
            }
        })
    }

    for (let k in target) {
        if (Object.prototype.hasOwnProperty(target, k)) {
            cloneTarget[k] = typeof target[k] === 'object' && target[k] !== null ? cloneDeep(target[k], hasMap) : target[k]
        }
    }

    return cloneTarget
}