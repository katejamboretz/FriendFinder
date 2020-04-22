// load data

var friendData = require("../data/friends");

// export data to app
module.exports = function (app) {
  //GET route to /api/friends to return json of all friends
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  //POST route to /api/friends to handle incoming survey
  app.post("/api/friends", function (req, res) {
    friendData.push(req.body);
  });
};
