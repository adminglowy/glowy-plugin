const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		'glowy-frame': './src/main.ts',
		'glowy-frame.min': './src/main.ts'
	},

	output: {
		filename: process.env.NODE_ENV === 'development' ? '[name].[chunkhash].js' : '[name].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: '!!ejs-webpack-loader!src/index.ejs'
		})
	],

	module: {
		rules: [
			{
				test: /.(ts|tsx)?$/,
				include: [path.resolve(__dirname, 'src')],
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'minify'
							]
						}
					},
					{
						loader: 'ts-loader',
					}
				]
			}
		]
	},

	optimization: {
		minimize: true,
    minimizer: [new UglifyJsPlugin({
			include: /\.min\.js$/,
			uglifyOptions: {
				output: {
					comments: false
				}
			}
    })]
	},

	devServer: {
		open: true
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
};
