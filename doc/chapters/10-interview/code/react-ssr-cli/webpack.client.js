const path = require('path')                    //node的path模块

module.exports = {
    mode: 'development',                         //开发模式
    entry: './src/client/index.js',              //入口
    output: {                                   //打包出口
        filename: 'index.js',                    //打包后的文件名
        path: path.resolve(__dirname, 'public')   //存放到根目录的build文件夹
    },
    module: {
        rules: [{                               //打包规则
            test: /\.js?$/,                    //对所有js文件进行打包
            loader: 'babel-loader',               //使用babel-loader进行打包
            exclude: /node_modules/,             //不打包node_modules中的js文件
            options: {
                presets: ['react', 'stage-0', ['env', {
                    //loader时额外的打包规则,这里对react,JSX进行转换
                    targets: {
                        browsers: ['last 2versions']   //对主流浏览器最近两个版本进行兼容
                    }
                }]]
            }
        }]
    }
}