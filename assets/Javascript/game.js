$(document).ready(function() {
    console.log("ready!");
    // Your code here.

    //define variables
    var minNumber = 19;
    
    var maxNumber = 120;

    var crystalMin = 1;

    var crystalMax = 12;
    
    var chosenNumber = randomNumberFromRange(minNumber, maxNumber);

    var rubyValue = randomNumberFromRange(crystalMin, crystalMax);

    var diamondValue = randomNumberFromRange(crystalMin, crystalMax);

    var yellowValue = randomNumberFromRange(crystalMin, crystalMax);

    var greenValue = randomNumberFromRange(crystalMin, crystalMax);

    var scoreTotal = 0;

    var winTotal = 0;

    var lossTotal = 0;


    // Generate random number between 19-120 when page is loaded.
    //This is a helper function 
    function randomNumberFromRange (min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
         $('#random-number').append("<b>Your target number is: </b>" + (chosenNumber));
    
    
    // Create an onclick event that generates random value for each crystal of 1-12 and adds that value to users total score
    
        // Ruby
    $('#ruby').val(rubyValue);
    $('#ruby').click(function() {
        scoreTotal += rubyValue;
        $('#current-score').text(scoreTotal);
        console.log(scoreTotal);
    })
        
        // Diamond
    $('#diamond').val(diamondValue);
    $('#diamond').click(function() {
        scoreTotal += diamondValue;
        $('#current-score').text(scoreTotal);
        console.log(scoreTotal);
    })   

        // Yellow
    $('#yellow').val(yellowValue);
    $('#yellow').click(function() {
        scoreTotal += diamondValue;
        $('#current-score').text(scoreTotal);
        console.log(scoreTotal);
    })   

        // Green
    $('#green').val(greenValue);
    $('#green').click(function() {
            scoreTotal += greenValue;
            $('#current-score').text(scoreTotal);
            console.log(scoreTotal);
        }) 

    // player's 'score === random number = win!

    $(".btn btn-primary").on("click", function() {
        // The two following conditionals should be checked on every click
        if (scoreTotal === chosenNumber) {
            console.log("You win!")
        // Inform user they won and add a win to their win total
            $('#win-loss-popup').text('You win!');
            $('#wins-number').text(winTotal + 1);
            }
        // payer's score > random number = lose
        else if (scoreTotal > chosenNumber) {
            console.log("You lose!")
        // Inform user they lost and add loss to toal
            $('#win-loss-popup').text('You lose!');
            $('#losses-number').text(lossTotal + 1);
            }
    })

    // game resets with new random number and win/loss gets tallied

})
