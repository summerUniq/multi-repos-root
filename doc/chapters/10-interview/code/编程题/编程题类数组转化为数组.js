// 1- Array.from

Array.from(document.querySelectorAll('div'))

// 2- Array.prototype.slice.call()
Array.prototype.slice.call(null, document.querySelectorAll('div'))

// 3- 扩展运算符
const res = [...document.querySelectorAll('div')]

// 4- 利用concat
Array.prototype.concat.apply(null, document.querySelectorAll('div'))