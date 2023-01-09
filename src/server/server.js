const express = require('express');
const app = express()
const ReactDOMServer = require('react-dom/server') /* React 服务端渲染的 api */
const ServerApp = require('../dist/serverApp').default /* 引入暴露给服务端渲染的组件 (⚡️webpack 打包后会放在 dist 内!) */


const AppString = ReactDOMServer.renderToString(ServerApp) /* 将 React 组件渲染成字符串 */
console.log(AppString);


const port = process.env.PORT || 5050 /* 有环境变量则传入环境变量, 无则直接传入 5000 的端口号 */
app.listen(port, ()=>console.log(`server on port ${port}`))