module.exports = {
	scripts: {
		default: "nodemon src/server",
		build: {
			default: "webpack",
			dev: "webpack --watch --config webpack.config.js"
		},
		test: {
			default: "mocha --require babel-core/register --recursive tests/",
			watch: "mocha --require babel-core/register --recursive tests/ --watch"
		} 
	}
};