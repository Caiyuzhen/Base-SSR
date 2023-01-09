const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

// 客户端渲染的配置
module.exports = {
	mode: 'development', /* 开发模式打包 */
	entry: path.join(__dirname, 'src/client/Index.tsx'),/* 入口文件(指向需要打包的 js 文件) */
	output: {
		filename: 'bundle.js',/* 打包后的文件名 */
		path: path.join(__dirname, 'dist'), /* 打包后放在哪里 */
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/, /* 要编译的文件类型 ts 或 tsx !*/
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
			},
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	plugins: [
		new HtmlPlugin({
			template: path.join(__dirname, 'src/client/index.html'),/* 要编译的 html */
		})
	],
	devServer: { /* 配置热更新 */
		hot: true,
		port: '3000',
	}
}