let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3,
    },
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)
// Uncaught TypeError: Converting circular structure to JSON
// --> starting at object with constructor 'Object'
// --- property 'c' closes the circle
// at JSON.stringify (<anonymous>)
// at <anonymous>:13:30