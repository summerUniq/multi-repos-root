// eval 
const name = 'poetry'
const str = 'const a = 123; console.log(name)'
eval(str)

// New Function

const b = 3;
const str1 = 'let a= 1; return a + b '

const func = new Function('b', str1)

console.log(func(b, str1))