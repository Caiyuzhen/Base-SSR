const path = require('path')

// 服务端渲染的配置
module.exports = {
	target: 'node', /* 指定打包的环境(让 wp 知道打包出来是给 node 用的) */
	mode: 'development', /* 开发模式打包 */
	entry: path.join(__dirname, 'src/client/ServerApp.js'),/* 入口文件(指向需要打包的 js 文件) */
	output: {
		filename: 'ServerApp.js',/* 打包后的文件名 */
		path: path.join(__dirname, 'dist'), /* 打包后放在哪里 */
		libraryTarget: 'commonjs2' /* 指定打包后的模块化方案 */
	},
	module: {
		rules: [{
			test: /\.(ts|tsx|js|jsx)$/,/* $通配符 */
			use: [
				{
					loader: 'babel-loader',/* 解析编译器 */
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
					}
				},
				{
					loader: 'ts-loader'
				},
			],
			exclude: /node_modules/,/* 排除掉 node_modules 库 */
		}]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
}