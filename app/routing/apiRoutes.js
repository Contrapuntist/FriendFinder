var friends = require("../data/friends");

// API routing setup for friends API
console.log (friends.friendsData); 
module.exports = function(app) {

    // GET routing   
    app.get("/api/friends", function(req, res) {
        res.json(friends.friendsData);
    });

    app.post("/api/friends", function(req, res) {
        friends.friendsData.push(req.body);
  });

};