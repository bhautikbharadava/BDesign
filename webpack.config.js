const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'index.js',
	libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  module: {
	rules: [
	  {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: 'babel-loader',
	  },
	  {
		test: /\.css$/,
		use: ['style-loader', 'css-loader'],
	  },
	],
  },
  resolve: {
	extensions: ['.js', '.jsx'],
  },
};