const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('../package.json')

module.exports = {
	entry: './src/main.ts',

	output: {
		library: 'glowy',
		libraryExport: 'default',
		libraryTarget: 'umd',
		filename: 'glowy-plugin.min.js',
		path: path.resolve(__dirname, '../dist')
	},

	plugins: [
		new webpack.DefinePlugin({
			WHITELABEL_ENDPOINT: JSON.stringify(process.env.WHITELABEL_ENDPOINT),
			VERSION: JSON.stringify(pkg.version)
		}),
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: '!!ejs-webpack-loader!src/index.ejs',
			TOKEN: process.env.TOKEN || ''
		})
	],

	module: {
		rules: [
			{
				test: /.(ts|tsx)?$/,
				include: [path.resolve(__dirname, '../src')],
				exclude: [/node_modules/],
				loader: 'ts-loader'
			}
		]
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
};
