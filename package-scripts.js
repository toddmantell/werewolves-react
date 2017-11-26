module.exports = {
  scripts: {
    default: "nodemon src/server",
    test: "mocha --require babel-core/register tests/moderator"
  }
};