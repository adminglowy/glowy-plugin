const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'production',

	entry: './src/bookmarklet.ts',

	output: {
		filename: 'bookmarklet.min.js',
		path: path.resolve(__dirname, '../dist')
	},

	plugins: [
		new webpack.ProgressPlugin()
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
