$(document).ready(function() {
    console.log("ready!");
    // Your code here.

    // Reference DOM elements
    var _randomNumber = document.getElementById('random-number'); 

    //define variables
    var minNumber = 19;
    
    var maxNumber = 120;
    
    var chosenNumber = randomNumberFromRange(minNumber, maxNumber);

    // Generate random number between 19-120 when page is loaded. 

    function randomNumberFromRange (min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
    $(_randomNumber).append("<b>Your target number is: </b>" + (chosenNumber));


    // Player clicks a crystal containing a random number. That number gets added to player's score.

    // player's score === random number = win!

    // payer's score > random number = lose

    // game resets with new random number and win/loss gets tallied
 
});