const map = new Map()
function fn1() {
    const obj = {}
    map.set('a', obj)  // fn1执行完 map还引用着obj
}

fn1()


const wMap = new WeakMap()
function fn2() {
    const obj = { x: 100 } // fn2执行完 obj会被清理掉
    wMap.set(obj, 100) // weakMap 的 key 只能是引用类型，字符串数字都不行
}

fn2()