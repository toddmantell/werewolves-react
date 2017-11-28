module.exports = {
	scripts: {
		default: "nodemon src/server",
		build: "webpack",
		test: "mocha --require babel-core/register --recursive tests/"
	}
};