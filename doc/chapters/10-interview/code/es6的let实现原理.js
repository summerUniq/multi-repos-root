var funcs = []

for (let i = 0; i < 10; i++) {
    funcs[i] = function () {
        console.log(i)
    }
}

funcs[0]()
console.log(funcs[1]());

// babel transfer to es5

// var funcs = [];
// var _loop = function _loop(i) {
//   funcs[i] = function () {
//     console.log(i);
//   };
// };
// for (var i = 0; i < 10; i++) {
//   _loop(i);
// }
// funcs[0]();