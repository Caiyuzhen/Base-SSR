const path = require('path')

// 服务端渲染的配置
module.exports = {
	mode: 'development', /* 开发模式打包 */
	entry: path.join(__dirname, 'src/client/ServerApp.jsx'),/* 入口文件(指向需要打包的 js 文件) */
	output: {
		filename: 'ServerApp.jsx',/* 打包后的文件名 */
		path: path.join(__dirname, 'dist'), /* 打包后放在哪里 */
	},
	module: {
		rules: [
			{
				test:/\.jsx?$/, /* 要编译的文件类型 jsx !*/
				use: [
					{
						loader: 'babel-loader',/* 解析编译器 */
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
						}
					},
				],
				exclude: /node_modules/,/* 排除掉 node_modules 库 */
			},
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
}