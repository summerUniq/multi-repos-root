// Array.prototype.myCall = function (context = window, ...args) {
//     if (typeof this !== 'function') {
//         throw TypeError('type error')
//     }
//     const fn = Symbol('fn')
//     context[fn] = this

//     const res = context[fn](...args)
//     delete context[fn]
//     return res
// }

Function.prototype.myCall = function (context = window, ...args) {
    if (typeof this !== 'function') {
        throw TypeError('Error')
    }
    const fn = Symbol('fn')
    context[fn] = this

    const res = context[fn](...args)
    delete context[fn]
    return res
}