// var a = {
// 	b: 123,
// 	c: '456',
// 	e: '789',
// }
// var str=`a{a.b}aa{a.c}aa {a.d}aaaa`;
// => 'a123aa456aa {a.d}aaaa'

function fn1(str, obj) {
    let flag = false
    let start = 0;
    let res = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{') {
            flag = true
            start = i + 1
            continue
        }
        if (!flag) {
            res += str[i]
        } else if (start[i] === '}') {
            res += match(str.slice(start, i), obj)
            flag = false
        }
    }

    return res
}
function match(str, obj) {
    const keys = str.split('.').slice(1)
    let index = 0
    let o = obj
    while (index < keys.length) {
        const currentKey = keys[index]
        if (!o[currentKey]) {
            return `{${str}}`
        } else {
            o = o[currentKey]
        }
        index++
    }
}