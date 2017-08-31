
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

        if (guessesMade.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
          guessesMade[guessesMade.length]=userGuess;
          guessesLeft--;
        }

        if (psychicGuess == userGuess) {
          wins++;
          guessesLeft = 10;
          guessesMade = [];
          psychicGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
         }

        if (guessesLeft == 0) {
          losses++;
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

