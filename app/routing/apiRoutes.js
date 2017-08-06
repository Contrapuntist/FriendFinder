var friends = require("../data/friends.js");

// API routing setup for friends API

module.exports = function(app) {

    // GET routing   
    app.get("/api/friends", function(req, res) {
        res.json(tableData);
    });

    app.post("/api/friends", function(req, res) {
        tableData.push(req.body);
  });

};