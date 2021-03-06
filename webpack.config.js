"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
/**
 * 在better-npm-run里配置
 * "betterScripts":{
 * 		"start" :{
 * 			"command" : "...."
 * 			"env":{
 * 				"HOST":"",
 * 				"PORT":""
 * 			}
 * 		}
 * progcess是node的全局对象
 * 这样就可以时间参数配置host和port
 * **/
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

loaders.push({
	test: /\.(le|c)ss$/,
	loader: "style!css!postcss!less!"
});

module.exports = {
	entry: [
		`webpack-dev-server/client?http://${HOST}:${PORT}`,
		`webpack/hot/only-dev-server`,
		`./src/index.jsx` // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.[hash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			}
		],
		loaders
	},
	postcss: [autoprefixer({browsers: ['last 2 versions']})],
	devServer: {
		contentBase: "./public",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: [
		//只要有error,就會阻止程序運行,即使是eslint的error也一樣
		//new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/template.html'
		})
	]
};
