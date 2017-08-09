$(document).ready(function() {

    
    console.log(friends.friendsData);  
 
    $('#submit').on('click', function() { 
        event.preventDefault();
        i = 1; 
        qval = '#q' + i
        var droptest = $(qval).val();
        console.log('value = '+ droptest); 
    
    
        // $.post("/api/friends", data, function (data) {
        //         console.log(data); 
        //     },
        // );

    });

});





// module.exports = appLogic; 