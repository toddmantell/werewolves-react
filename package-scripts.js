module.exports = {
	scripts: {
		default: "webpack && nodemon src/server",
		build: {
			default: "webpack",
			dev: "webpack --watch --config webpack.config.js"
		},
		test: {
			default: "jest --coverage",
			watch: "jest --watch --coverage"
		}
	}
};