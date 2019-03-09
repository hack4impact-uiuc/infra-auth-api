const { app } = require("./App");

const server = app.listen(8000, function() {
  console.log("Listening on http://localhost:5000");
});

module.exports.default = server;
