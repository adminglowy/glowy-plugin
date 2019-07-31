const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		'glowy': './src/main.ts'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	},

	plugins: [
		new webpack.DefinePlugin({
			WHITELABEL_ENDPOINT: JSON.stringify(process.env.WHITELABEL_ENDPOINT)
		}),
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: '!!ejs-webpack-loader!src/index.ejs'
		})
	],

	module: {
		rules: [
			{
				test: /.(ts|tsx)?$/,
				include: [path.resolve(__dirname, '../src')],
				exclude: [/node_modules/],
				use: [
					{
						loader: 'ts-loader',
					}
				]
			}
		]
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
};
