module.exports = {
	mode: 'development',
	
	output: {
		filename: '[name].[chunkhash].js'
	},

	devServer: {
		open: true
	}
};
