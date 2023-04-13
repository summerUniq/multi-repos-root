const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise(fn) {
    const that = this
    this.state = PENDING

    this.value = null

    that.resolvedCallbacks = []
    that.rejectedCallbacks = []

    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVED
            that.value = value

            that.resolvedCallbacks.forEach((cb) => cb(that.value))
        }
    }

    function reject(value) {
        if (this.state === PENDING) {
            that.state = REJECTED
            that.value = value

            that.rejectedCallbacks.forEach((cb) => cb(that.value))
        }
    }
}


myPromise.prototype.then = function (onResolved, onRejected) {
    const that = this
    onResolved = typeof onRejected === 'function' ? onResolved : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e }

    if (that.state === PENDING) {
        that.resolvedCallbacks.push(onResolved)
        that.rejectedCallbacks.push(onRejected)
    }

    if (that.state === REJECTED) {
        onResolved(that.value)
    }

    if (that.state === RESOLVED) {
        onRejected(that.value)
    }
}

