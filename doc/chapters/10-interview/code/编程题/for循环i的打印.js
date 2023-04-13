// 编程题改造下面的代码，让它输出1，2，3，4，5
// for(var i = 1; i <= 5; i ++){ setTimeout(function timer(){ console.log(i) }, 0) }

// 1- 闭包

for (var i = 1; i <= 5; i++) {
    (function (i) {
        setTimeout(function timer() {
            console.log(i)
        }, 0)
    })(i)
}

// 2- let 
for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, 0)
}

// 3- setTimeout的第三个参数
for (let i = 1; i <= 5; i++) {
    setTimeout(function timer(i) {
        console.log(i)
    }, 0, i)
}