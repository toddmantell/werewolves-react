
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('build'));

app.get("/", loggerMiddleware, (req, res) => {
	res.sendFile(path.resolve("index.html"));
});

function loggerMiddleware(req, res, next) {
	console.log("base route accessed");
	next();
}

module.exports = app;