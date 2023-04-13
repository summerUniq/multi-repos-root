function add() {
    let _args = [...arguments]
    const fn = function () {
        _args = [..._args, ...arguments]
        return fn
    }
    fn.toString = function () {
        return _args.reduce((sum, cur) => sum + cur)
    }
    return fn
}
const fn = add(1)(2)(3)
console.log(fn.toString())

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}