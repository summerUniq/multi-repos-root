Object.defineProperty(Object, 'assign', {
    value: function (target, ...args) {
        if (typeof target == undefined) {
            throw new Error('Cannot convert null or undefined to object')
        }
        const o = Object(target)
        for (let k in args) {
            let currentSource = args[k]
            if (currentSource !== null) {
                for (let attr in currentSource) {
                    if (Object.prototype.hasOwnProperty.call(currentSource, attr)) {
                        o[attr] = currentSource[attr]
                    }
                }
            }
        }

        return o
    },
    enumerable: false,
    writable: true,
    configurable: true
})