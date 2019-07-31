const merge = require('webpack-merge')
const base = require('./webpack/base.config')

if (process.env.NODE_ENV === 'production') {
	module.exports = merge(base, require('./webpack/prod.config'))
}

module.exports = merge(base, require('./webpack/dev.config'))