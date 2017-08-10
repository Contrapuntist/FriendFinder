var friends = require("../data/friends");

// API routing setup for friends API
console.log (friends.friendsData); 

console.log(friends.friendsData[0].scores[1]);

var testFriend = {
    "name": "Natasha",
    "pic": "mypicurl",
    "scores": [1, 3, 4, 2, 3, 4, 5, 5, 1, 3]
}

var matchMakerObj = {
    friendMatch:  null, 
    checkCompatibility: function ( newfriend, matchdata ) { 
        console.log()
        const questionCount = 10;
        this.friendMatch = matchdata[0];        // defaults match to first entry
        currentMatchScore = 50;
        for (var i = 0; i < matchdata.length; i++ ) {  
            var matchScoreResults = 0;
            console.log(matchdata[i])
            for (var x = 0; x < questionCount; x++ ) { 
                console.log("new friend val: " + newfriend.scores[x] + " - " + "Match score val: " + matchdata[i].scores[x] )
                matchScoreResults = matchScoreResults + Math.abs( newfriend.scores[x] - matchdata[i].scores[x] )
                console.log(matchScoreResults);  
            }
            if (matchScoreResults < currentMatchScore ) { 
                this.friendMatch = matchdata[i];
            } 
        }
        console.log(this.friendMatch); 
        return this.friendMatch; 
    } 
}

// matchMakerObj.checkCompatibility(testFriend, friends.friendsData);


module.exports = function(app) {

    // GET routing for API   
    app.get("/api/friends", function(req, res) {
        res.json(friends.friendsData);
    });

    // POST routing to API
    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        matchMakerObj.checkCompatibility(req.body, friends.friendsData); 
        friends.friendsData.push(req.body);
        console.log(friends.friendsData);
        res.json( matchMakerObj.friendMatch ) 
    });

}; 