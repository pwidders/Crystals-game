$(document).ready(function() {
    console.log("ready!");
    // Your code here.

    // Reference DOM elements
    var _randomNumber = $("#random-number"); 

    var _crystalValueRuby = $("#ruby");

    var _crystalValueDiamond = $("#diamond");

    var _crystalValueYellow = $("#yellow");

    var _crystalValueGreen = $("#green");

    var _scoreBoardBox = $("#current-score");

    var _youWinOrLose = $("#win-loss-popup");

    var _winsNumber = $("#wins-number");

    var _lossesNumber = $("#losses-number");

    
    //define variables
    var minNumber = 19;
    
    var maxNumber = 120;

    var crystalMin = 1;

    var crystalMax = 12;
    
    var chosenNumber = randomNumberFromRange(minNumber, maxNumber);

    var scoreNewGame = 0;

    var totalScoreBank = [];

    var rubyValue = randomNumberFromRange(crystalMin, crystalMax);

    var diamondValue = randomNumberFromRange(crystalMin, crystalMax);

    var yellowValue = randomNumberFromRange(crystalMin, crystalMax);

    var greenValue = randomNumberFromRange(crystalMin, crystalMax);

    var scoreTotal = 0;


    // Generate random number between 19-120 when page is loaded.
    //This is a helper function 
    function randomNumberFromRange (min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
        
        $(_randomNumber).append("<b>Your target number is: </b>" + (chosenNumber));
    
    
    // Create an onclick event that generates random value for each crystal of 1-12 and adds that value to users total score
    
        // Ruby
    $(_crystalValueRuby).val(rubyValue);
   
    $(_crystalValueRuby).click(function() {
        scoreTotal += rubyValue
        // var previousScore = Number(_scoreBoardBox.text());

        _scoreBoardBox.text(scoreTotal);
        console.log(Number(_scoreBoardBox));
    })
        
        // Diamond
    $(_crystalValueDiamond).val(diamondValue);
   
    $(_crystalValueDiamond).click(function() {
        scoreTotal += diamondValue
        // previousScore = Number(_scoreBoardBox.text());
        _scoreBoardBox.text(scoreTotal);
        console.log(_scoreBoardBox);
    })   

        // Yellow
    _crystalValueYellow.val(yellowValue);
   
    _crystalValueYellow.click(function() {
        scoreTotal += yellowValue
        // previousScore = Number(_scoreBoardBox.text());
        _scoreBoardBox.text(scoreTotal);
        console.log(_scoreBoardBox);
    }) 

        // Green
    _crystalValueGreen.val(greenValue);
   
    _crystalValueGreen.click(function() {
        scoreTotal += greenValue
        // previousScore = Number(_scoreBoardBox.text());
        _scoreBoardBox.text(scoreTotal);
        // console.log(_scoreBoardBox);


    })

    
    // player's 'score === random number = win!

    // Sasha's modular way

    $(".crystal").on("click", function() {
        console.log("unique id", $(this).attr("id"))

            // The two following conditionals should be checked on every click


        if (scoreTotal === chosenNumber) {
            console.log("You win!")
        }
            // payer's score > random number = lose
        else if (scoreTotal > chosenNumber) {
            console.log("You lose!")
        }
    })



    // game resets with new random number and win/loss gets tallied
})
