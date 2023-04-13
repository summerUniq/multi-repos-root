// Array.prototype.myBind = function (context = window, ...args) {
//     if (typeof this !== 'function') {
//         throw TypeError('Type error')
//     }
//     const self = this

//     return function F() {
//         if (this instanceof F) {
//             return new self(...args, ...arguments)
//         }
//         return self.apply(context, [...args, ...arguments])
//     }
// }


Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Error')
    }
    const self = this

    return function F() {
        if (self instanceof F) {
            return new self(...args, ...arguments)
        }
        return self.apply(context, [...args, ...arguments])
    }
}