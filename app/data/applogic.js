var friends = require('./friends.js');  

console.log(friends.friendsData);  
 
    $('#submit').on('click', function() {
        var droptest = $('#q1').val();
        console.log('value = '+ droptest); 
    });

module.exports = appLogic; 