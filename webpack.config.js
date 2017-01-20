const path = require('path');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

var config = {
	entry: `${SRC_PATH}/app/index.js`,
	
	output: { 
		path: `${DIST_PATH}/app`,
		filename: 'bundle.min.js', 
		publicPath: '/app/' 
	},

	module: {
		loaders: [
			{
				test: /\.(sass|scss|css)$/,
				loaders: ['style-loader','css-loader?sourceMap','sass-loader?sourceMap']
			},
			{
				test: /\.(js|jsx|.json)$/,
				loader: 'babel-loader',
				exclude: ['node_modules'],
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}

module.exports = config;