var path = require("path");


// HTML routing setup

module.exports = function(app) {

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html")); 
  }); 

  // Default route that goes to home page
  app.use(function(req, res) { 
    res.sendFile(path.join(__dirname, "/../public/home.html"))
  }); 

}