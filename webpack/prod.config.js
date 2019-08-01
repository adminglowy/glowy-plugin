const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'production',

	entry: {
		'glowy': './src/main.ts',
		'bookmarklet.min': './src/bookmarklet.ts'
	},

	module: {
		rules: [
			{
				test: /.(ts|tsx)?$/,
				include: [path.resolve(__dirname, '../src')],
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'minify',
								'@babel/preset-env'
							]
						}
					},
					{
						loader: 'ts-loader'
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
	}
};
