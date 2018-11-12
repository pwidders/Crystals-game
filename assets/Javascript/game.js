$(document).ready(function() {
    console.log("ready!");
    // Your code here.

    // Reference DOM elements
    var _randomNumber = document.getElementById("random-number"); 

    var _CrystalValueRuby = document.getElementById("ruby");

    var _scoreBoardBox = document.getElementById("scoreBoard");

    var _totalScore = document.getElementById("total-score");

    //define variables
    var minNumber = 19;
    
    var maxNumber = 120;

    var crystalMin = 1;

    var crystalMax = 12;
    
    var chosenNumber = randomNumberFromRange(minNumber, maxNumber);

    var crystalValue = randomNumberFromRange(crystalMin, crystalMax);

    

    // Generate random number between 19-120 when page is loaded. 

    function randomNumberFromRange (min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    
    $(_randomNumber).append("<b>Your target number is: </b>" + (chosenNumber));

    // Create an onclick event that generates random value for each crystal of 1-12 and adds that value to total score
    
        //Ruby
    $(_CrystalValueRuby).click(function() {
        function randomNumberFromRange (min,max)
        {
        return Math.floor(Math.random()*(max-min+1)+min);
        } 
        $(_scoreBoardBox).replaceWith("<h2>" + (crystalValue) + "</h2>");
    })
        //
    $(_CrystalValueOne).click(function() {
        function randomNumberFromRange (min,max)
        {
        return Math.floor(Math.random()*(max-min+1)+min);
        } 
        $(_scoreBoardBox).replaceWith("<h2>" + (crystalValue) + "</h2>");
    })
    

    console.log(_scoreBoardBox);
    
        //$("#ruby").click(function(){
        //    $(_scoreBoardBox).val(crystalValueA);
        //    $("#scoreBoard").append(crystalValueA);
        //})

    

    console.log(_scoreBoardBox);
    
    // Player clicks a crystal containing a random number. That number gets added to player's score.

        //

    // player's score === random number = win!

    // payer's score > random number = lose

    // game resets with new random number and win/loss gets tallied
 
});