const merge = require('webpack-merge')
const base = require('./webpack/base.config')

if (process.env.NODE_ENV === 'production') {
	module.exports = merge.smart(base, require('./webpack/prod.config'))
} else {
	module.exports = merge.smart(base, require('./webpack/dev.config'))
}
