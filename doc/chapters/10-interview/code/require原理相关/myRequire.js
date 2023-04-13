const fs = require('fs')
const vm = require('vm')
const path = require('path')

function Require(modulePath) {
    let absPathname = path.resolve(__dirname, modulePath)
    const extNames = Object.keys(Module._extensions)

    let index = 0

    const oldPath = absPathname

    function findExt(absPathname) {
        if (index === extNames.length) {
            throw new Error('文件不存在')
        }

        try {
            fs.accessSync(absPathname)
            return absPathname
        } catch (error) {
            const ext = extNames[index++]
            findExt(oldPath + ext)
        }
    }

    absPathname = findExt(absPathname)

    if (Module._cache[absPathname]) {
        return Module._cache[absPathname].exports
    }

    const module = new Module(absPathname)

    Module._cache[absPathname] = module

    tryModuleLoad(module)

    return module.exports
}

// 定义模块，添加文件id标识和exports属性
function Module(id) {
    this.id = id
    this.exports = {}
}

Module._cache = {}

Module.wrapper = [
    "(function(exports, module, Require, __dirname, __filename){",
    "})"
]

Module._extensions = {
    '.js'(module) {
        const content = fs.readFileSync(module.id, 'utf-8')
        const fnStr = Module.wrapper[0] + content + Module.wrapper[1]
        const fn = vm.runInThisContext(fnStr)
        fn.call(module.exports, module.exports, module, Require, __filename, __dirname)
    },
    '.json'(module) {
        const json = fs.readFileSync(module.id, 'utf-8')
        module.exports = JSON.parse(json)
    }
}

function tryModuleLoad(module) {
    const extension = path.extname(module.id)
    Module._extensions[extension](module)
}


// 测试
let json = Require('./test.json')
let test2 = Require('./test.js')
console.log('json', json);
console.log('test2', test2);