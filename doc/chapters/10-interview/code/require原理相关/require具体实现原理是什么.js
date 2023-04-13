// 利用对象缓存路径和module.exports的内容，变量查找
// require 原理 exp: const aModule = require('./a.js')
// 首先， 将相对路径转换成绝对路径
// 根据路径判断是否有缓存，
    // 如果有缓存，直接返回当前模块下缓存中的exports内容，结束
    // 如果没有缓存，创建一个Module的实例，缓存起来
        // 取出模块后缀，根据后缀查找不同的方法执行
            // 如果为json文件，则直接赋值给module.exports, 结束
            // 如果为js文件：将js内容进行包裹； 使用vm模块执行被包裹的函数字符串，转化为真正的函数
            // 利用call调用函数，从而修改module.exports的值， 结束
