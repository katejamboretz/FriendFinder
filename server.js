// dependencies
var express = require("express");
var path = require("path");

// express instance
var app = express();

// port
var PORT = process.env.PORT || 8080;

// express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// data (in data/friends.js)

// routes (in routes/apiRoutes.js or routes/htmlRoutes.js)

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// start server and listener

app.listen(PORT, function () {
  console.log("server listening on: http://localhost:" + PORT);
});
