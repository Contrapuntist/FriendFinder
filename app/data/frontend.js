$(document).ready(function() {
    
    console.log('in doc ready');

    $('#submit').on('click', function() {  
        event.preventDefault();
        var questionAmount = 10;
        // var name = $("#name").val().trim();  
        var responseArray = [];
        // var testArr = []; 
        for (var i = 0; i < questionAmount; i++) { 
            let qval = '#q' + (i + 1);
            let scoreVal = Number($(qval).val());
            responseArray.push(scoreVal);
            // testArr.push(scoreVal); 
            console.log('value = '+ scoreVal); 
        }
        
        var newFriend = {
            "name": $("#name").val().trim(),
            "photo": $('#picurl').val().trim(),
            "scores": responseArray 
        }  
        // console.log(testArr);  
        console.log(newFriend);   
    
        $.post("/api/friends", newFriend).then( function (data) { 
            console.log(data); 
        });  
   
    });

});