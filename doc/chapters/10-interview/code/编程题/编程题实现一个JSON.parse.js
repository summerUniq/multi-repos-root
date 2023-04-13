// JSON.parse(text[, reviver])

// 方法一：

function jsonParse(text) {
    return eval('(' + text + ')')
}

const a = JSON.stringify({ x: 5 })

const b = JSON.stringify([1, "false", false])

const c = JSON.stringify({ ll: undefined })

const d = JSON.stringify({ b: null })

// console.log(jsonParse(a))
// console.log(jsonParse(b))
// console.log(jsonParse(c));
// console.log(jsonParse(d));
// 注意做转译，防止xss

// 方法2

function jsonParse2(json) {
    return (new Function('return' + json))()
}
var jsonStr = '{ "age": 20, "name": "jack" }'

console.log(jsonParse2(jsonStr))
console.log(jsonParse2(a))
console.log(jsonParse2(b))
console.log(jsonParse2(c));
console.log(jsonParse2(d));