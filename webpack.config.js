const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
	entry: ['./src/components/app'],
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.jsx?/i,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: {
					babelrc: true
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [new UglifyJSPlugin(), new WebpackShellPlugin({
		onBuildEnd: ['nodemon src/server']
	})]
};