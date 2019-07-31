const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'minify'
							]
						}
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
