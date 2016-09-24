'use strict';

const fs = require('fs');

const node = {};
['fs', 'net', 'path'].forEach(m => node[m] = 'empty');

const externals = {};
['react', 'react-native', 'react-native-vector-icons', 'react-native-vector-icons/MaterialIcons'].forEach(m => externals[m] = `commonjs ${m}`);
fs.readdirSync('assets').forEach(a => externals[`assets/${a}`] = `commonjs ./assets/${a}`);

module.exports = {
	entry: './src/rye.tsx',
	output: {
		filename: './rye.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: `babel?{presets:[['es2015',{modules:false}]]}!ts`
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
	},
	node: node,
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
	},
	plugins: [],
	externals: externals
};
