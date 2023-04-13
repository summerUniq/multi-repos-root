# single-spa

## 框架思想

## app

- 监听 url 变化， 每个应用程序都可以响应 url 路由事件，并且必须知道如何从 DOM 中初始化、挂载和卸载自己
- 当激活时，它们监听 url 路由事件并将内容放在 DOM 上， 当它们处于非活动状态时，它们不侦听 url 路由事件，并且完全从 DOM 中删除。

## single-spa-config

- html 页面和向 Single SPA 注册应用程序的 JavaScript
- 每个应用程序都注册了三件东西
  - A name
  - A function (加载应用程序的代码)
  - A function (确定应用程序何时处于活动状态/非活动状态)

## 使用 single-spa 和模块联合

single-spa 核心团队建议使用 SystemJS + import map 作为微前端的模块加载器。
作为替代, 你可以使用全局变量和 <script> 标签
一个使用 SystemJS 和模块联合加载微前端的例子在 https://github.com/ScriptedAlchemy/mfe-webpack-demo/pull/2.
在选择这两种方法时，我们倾向于 import maps，但不反对模块联合

webpack 代码拆分的文档: https://webpack.js.org/guides/code-splitting/#dynamic-imports

### ts-congig-single-spa

// tsconfig.json

```
{
  "compilerOptions": {
    "esModuleInterop": true,
    "module": "esnext",
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "lib": [
      "dom",
      "es5",
      "scripthost",
      "es2015",
      "es2015.promise",
      "es2016.array.include",
      "es2018"
    ],
    "declaration": true,
    "emitDeclarationOnly": true
  }
}
```
