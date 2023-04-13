// const myInstanceOf = function (left, right) {
//     if (typeof left !== 'object' || left === null) {
//         return false
//     }
//     let proto = Object.getPrototypeOf(left)
//     while (true) {
//         if (proto == null) {
//             return false
//         }
//         if (proto === right.prototype) {
//             return true
//         }
//         proto = Object.getPrototypeOf(proto)
//     }
// }

function myInstanceOf(left, right) {
    if (typeof left !== 'object' || left === null) {
        return false
    }

    left = left._proto_

    let prototype = right.prototype

    while (true) {
        if (left == null) {
            return false
        }
        if (left === prototype) {
            return true
        }
        left = left._proto_
    }
}