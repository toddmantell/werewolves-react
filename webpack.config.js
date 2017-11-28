const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
					presets: ["env"],
					plugins: ["transform-class-properties"]
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [new UglifyJSPlugin()]
};