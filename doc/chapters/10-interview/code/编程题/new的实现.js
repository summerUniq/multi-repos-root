// function myNew(func, ...params) {
//     const obj = {}
//     obj._proto_ = func.prototype
//     const result = func.apply(obj, params)
//     return result instanceof Object ? result : obj
// }

function create() {
    let obj = {}
    const fn = [].shift.apply([...arguments])
    obj._proto_ = fn.prototype
    let res = fn.apply(obj, arguments)
    return res instanceof Object ? res : obj
}