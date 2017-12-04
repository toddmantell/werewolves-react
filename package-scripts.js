module.exports = {
	scripts: {
		default: "nodemon src/server",
		build: {
			default: "webpack",
			dev: "webpack --watch --config webpack.config.js"
		},
		test: "mocha --require babel-core/register --recursive tests/"
	}
};