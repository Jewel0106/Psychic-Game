
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", 
                          "h", "i", "j", "k", "l", "m", "n", 
                          "o", "p", "q", "r", "s", "t", "u", 
                          "v", "w", "x", "y", "z"];


    console.log(computerChoices);

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesMade = [];
    var userGuess=null;

    var psychicGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    

    var psychicChoice = computerChoices[Math.floor(Math.random()
         * computerChoices.length)];

   

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      console.log(psychicChoice);
      
        if (guessesMade.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
          guessesMade[guessesMade.length]=userGuess;
          guessesLeft--;
        }

        if (userGuess ===psychicGuess) {
          wins++;
            alert("Congratulations! You've read my mind...Play again.");
          guessesLeft = 10;
          guessesMade = [];
          psychicGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         }

        if (guessesLeft == 0) {
          losses++;
            alert("Sorry you couldn't read my mind...try again.");
          guessesLeft = 10;
          guessesMade = [];
          psychicGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
      
        var winsDisplay = document.getElementById("wins");
        winsDisplay.innerHTML = wins;

        var lossesDisplay = document.getElementById("losses");
        lossesDisplay.innerHTML = losses;

        var guessesLeftDisplay = document.getElementById("guessesLeft");
        guessesLeftDisplay.innerHTML = guessesLeft;

        var guessesMadeDisplay = document.getElementById("guessesMade");
        guessesMadeDisplay.innerHTML = guessesMade;
        
    }

