const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'


class Promise {
    constructor(exector) {
        this.status = PENDING

        this.value = undefined
        this.reason = undefined

        this.onFulFilledCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = function (value) {
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = value
                this.onFulFilledCallbacks.forEach(fn => fn(this.value))
            }
        }

        const reject = function (reason) {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn(this.reason))
            }
        }

        try {
            exector(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulFilled, onRejected) {
        onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : (value) => value
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => {
            throw new Error(reason instanceof Error ? reason.message : reason)
        }

        const self = this

        return new Promise((resolve, reject) => {
            if (this.status === PENDING) {
                self.onFulFilledCallbacks.push(() => {
                    try {
                        setTimeout(() => {
                            const result = onFulFilled(self.value)
                            result instanceof Promise ? result.then(resolve, reject) : resolve(result)
                        })
                    } catch (error) {
                        reject(error)
                    }
                })
                self.onRejectedCallbacks.push(() => {
                    try {
                        const result = onRejected(self.reason)
                        result instanceof Promise ? result.then(resolve, reject) : reject(result)
                    } catch (error) {
                        reject(error)
                    }
                })
            }

            if (this.status === FULFILLED) {
                try {
                    setTimeout(() => {
                        const result = onFulFilled(self.value)
                        result instanceof Promise ? result.then(resolve, reject) : resolve(result)
                    })
                } catch (error) {
                    reject(error)
                }
            }

            if (this.status === REJECTED) {
                try {
                    const result = onRejected(self.reason)
                    result instanceof Promise ? result.then(resolve, reject) : reject(result)
                } catch (error) {
                    reject(error)
                }
            }
        })
    }
    catch(onRejected) {
        return this.then(null, onRejected)
    }
    static resolve(value) {
        if (value instanceof Promise) {
            return value
        }
        return new Promise((resolve, reject) => resolve(value))
    }
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }
    static all(promiseArr) {
        const len = promiseArr.length
        const values = new Array(len)
        let count = 0
        return new Promise((resolve, reject) => {
            for (let i = 0; i < len; i++) {
                Promise.resolve(promiseArr[i]).then((value) => {
                    values[i] = value
                    count++
                    if (count === len) {
                        resolve(values)
                    }
                }, error => reject(error))
            }
        })
    }
    static race(promiseArr) {
        return new Promise((resolve, reject) => {
            promiseArr.forEach((p) => {
                Promise.resolve(p).then((value) => {
                    resolve(value)
                }, err => reject(err))
            })
        })
    }
}