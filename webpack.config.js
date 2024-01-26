const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
	return {
		mode: 'development',
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js',
		},
		module: {
			rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
			// new Dotenv(),
			new webpack.DefinePlugin({
				'process.env': env,
			}),
		],
	};
};
