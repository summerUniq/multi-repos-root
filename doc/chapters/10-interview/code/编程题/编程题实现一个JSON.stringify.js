// function ===> undefined
// undefined ===> undefined

// boolean  ===> '"' + input + '"'
// string ===> '"' + input + '"'

// function jsonStringify(obj) {
//     let type = typeof obj
//     if (type !== 'object') {
//         if (/undefined | function | string /.test(type)) {
//             return '"' + obj + '"'
//         }
//         return String(obj)
//     }

//     const isArray = Array.isArray(obj)

//     let json = []

//     for (let k in obj) {
//         let v = obj[k]
//         let vType = typeof v
//         if (/undefined|function|string/.test(vType)) {
//             v = '"' + v + '"'
//         } else if (vType === 'object') {
//             jsonStringify(v)
//         }
//         json.push(isArray ? "" + String(v) : '"' + k + '":' + String(v))
//     }
//     return (isArray ? "[" : "{") + String(json) + (isArray ? "]" : "}")
// }

function jsonStringify(obj) {
    const type = typeof obj
    if (type === undefined || type === 'function') {
        return undefined
    }
    if (obj instanceof Date) {
        return `"${obj.toJSON()}"`
    }

    if (obj instanceof RegExp) {
        return '{}'
    }

    if (type !== 'object') {
        return type === 'string' ? '"' + obj + '"' : String(obj)
    }

    if (Array.isArray(obj)) {
        let arrStr = obj.map((v) => `${jsonStringify(v)}`)
        return `[${arrStr.join(',')}]`
    }

    let keyNames = Object.getOwnPropertyNames(obj)

    const arrStr = keyNames.map((v) => {
        return `${jsonStringify(obj[v]) !== undefined} && "${v}":${jsonStringify(obj[v])}`
    })

    return `{${arrStr.join(',')}}`

}