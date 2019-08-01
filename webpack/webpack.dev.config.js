const merge = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = merge.smart(base, {
	mode: 'development',
	
	devServer: {
		open: true
	}
})
