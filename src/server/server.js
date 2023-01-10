const express = require('express');
const app = express()
const ServerApp = require('../../dist/ServerApp.js').default /* 引入暴露给服务端渲染的组件 (⚡️webpack 打包后会放在 dist 内!) */
const ReactDOMServer = require('react-dom/server') /* React 服务端渲染的 api */
const fs = require('fs') /* node 内置的文件读写模块 */
const path = require('path')


// 服务端渲染的组件
const AppString = ReactDOMServer.renderToString(ServerApp) /* 将 React 组件渲染成字符串 */
console.log(AppString);


// 获取 html 文件
const htmlTemplate = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf-8')/* Sync 因为文件很小，所以同步获取 */
console.log(htmlTemplate)


// 把 html 根路径里边的注释替换成 AppString 这个要渲染的组件
const newHtml = htmlTemplate.replace('<!-- app -->', AppString) /* 将 html 文件中的 <!-- app --> 替换成 AppString */


// 静态资源托管（这里是为了让客户端能够访问到打包后的 js 文件）, 静态目录托管到 public 目录下
app.use('public', express.static(path.join(__dirname, '../../dist'))) /* 静态资源托管 */


// 路由匹配
app.get('/', (req, res) => {
	res.send(newHtml) /* 将替换后的 html 文件返回给客户端 */
})


// 启动端口
const port = process.env.PORT || 5050 /* 有环境变量则传入环境变量, 无则直接传入 5000 的端口号 */
app.listen(port, ()=>console.log(`server on port ${port}`))