// addEventListener, removeEventListener, removeAllListeners, once, emit

function EventEmitter() {
    this.events = new Map()
}

const wrapCallback = (fn, once = false) => ({ callback: fn, once })

EventEmitter.prototype.addListener = function (type, listener, once = false) {
    const handlers = this.events.get(type)
    if (!handlers) {
        this.events.set(type, wrapCallback(listener, once))
    } else if (typeof handlers.callback === 'function') {
        this.events.set(type, [handlers, wrapCallback(listener, once)])
    } else {
        handlers.push(wrapCallback(listener, once))
    }
}

EventEmitter.prototype.removeListener = function (type, listener) {
    const handlers = this.events.get(type)
    if (!handlers) {
        return
    }

    if (!Array.isArray(handlers)) {
        if (handlers.callback === listener.callback) {
            this.events.delete(type)
        } else {
            return
        }
    }

    for (let i = 0; i < handlers.length; i++) {
        if (handlers[i].callback === listener.callback) {
            handlers.splice(i, 1)
            i--
        }
    }

    if (handlers.length === 1) {
        this.events.set(type, handlers[0])
    }
}

EventEmitter.prototype.once = function (type, listener) {
    this.addListener(type, listener, true)
}

EventEmitter.prototype.emit = function (type, ...args) {
    const handlers = this.events.get(type)
    if (!handlers) {
        return
    }
    if (!Array.isArray(handlers)) {
        handlers.callback.apply(this, args)
        if (handlers.once) {
            this.events.delete(type)
        }
    }
    handlers.forEach((h) => {
        h.callback.apply(this, args)
        if (h.once) {
            this.removeListener(type, h)
        }
    })
    return true
}

EventEmitter.prototype.removeAllListeners = function (type) {
    const handlers = this.events.get(type)
    if (!handlers) {
        return
    }
    this.events.delete(type)
}  