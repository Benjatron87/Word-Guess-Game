
// An array of common ultimate terms.
var words = ["SCOOBER",
    "FLICK",
    "BACKHAND",
    "LAYOUT",
    "HUCK",
    "BID",
    "HAMMER",
    "MARK",
    "STALL",
    "CALLAHAN",
    "THUMBER",
    "HARDCAP",
    "SOFTCAP",
    "CUTTER",
    "HANDLER",
    "SKIED",
    "BREAK"
            ]


// Game starts upon pressing the space button.
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        //  State necessary variables.
        var blanks = [];
        var guessesLeft = 10;
        var blankVar = "";
        var guessNum = 0;

        // State variables to link to HTML.
        var DOMblanks = document.getElementById("blanks");
        document.getElementById("guesses").innerHTML = guessesLeft;
        document.getElementById("endgame").innerHTML = "";
        document.getElementById("wrong-guess").innerHTML = " ";
        
        // Getting a random number to choose a random word from the array above.
        var randNum = Math.floor(Math.random() * words.length );
        var randomWord = words[randNum];

        // Converting that random word into and array of its own.
        var letters = randomWord.split("");

        // Adds each element of the "blanks" array individually to the HTML. 
        for(var l = 0; l < blanks.length; l++){

            var blanksDIV = document.createElement("a");

            blanksDIV.textContent = blanks[l];

            DOMblanks.appendChild(blanksDIV);
        }

        // Adding the appropriate number of underscores to the "blanks" array.
        for(var k = 0; k < letters.length; k++){
            blanks.push("_ ");
        }

        // Resets these variables for a new game.
        var lettersWord = 1;
        var blanksWord = 0;

        console.log(blanksWord);
        console.log(lettersWord);

        console.log(blanks);
        console.log(letters);  

            // When any key is pressed it acts as a guess and the following processes are run.
            document.onkeypress = function(event) {

                // As long as there are more guesses left and the word has not been guessed in full do the following.
                if(guessesLeft > 0 && (blanksWord !== lettersWord)){
                
                    document.getElementById("guesses").innerHTML = guessesLeft;

                    console.log(guessesLeft);

                    // Figures out which key was pressed and adds that to the "guess" variable.
                    event = event || window.event;

                    var charCode = event.keyCode || event.which;

                    var guess = String.fromCharCode(charCode);

                    guess = guess.toUpperCase();

                    var guessRight = false;

                    // Checks if the guess matches any letter in the "letters" array.
                    for (var i = 0; i < letters.length; i++){

                        // if the guess matches it turns that element in the "blanks" array to the guessed letter.
                        if (guess == letters[i]){

                            guessRight = true;
                            blanks[i] = guess;
                        }
                        blankVar = blankVar + blanks[i];
                    }

                    // Adds the guessed letter to the HTML when a correct guess takes place.
                    document.getElementById("blanks").innerHTML = blankVar;

                    console.log(guessNum);
                    
                    // Returns this variable to its blank state to ready it for the next guess.
                    blankVar = "";

                    console.log(blanks);
                    console.log(letters);

                    // Turns the "blanks" and "letters" arrays into strings that can be compared with each other.
                    blanksWord = blanks.join("");
                    lettersWord = letters.join("");

                    console.log(blanksWord);
                    console.log(lettersWord);
                    
                    // If the strings "blanksWord" and "lettersWord" match, then "You Win!" is displayed in the HTML.
                    if (blanksWord == lettersWord){

                        document.getElementById("endgame").innerHTML = "You Win!";
                    }

                    // If your guess was wrong, it adds the letter guessed to the HTML and removes 1 from the guesses left.
                    if (guessRight == false){

                        guessesLeft--;

                        document.getElementById("wrong-guess").innerHTML += guess;
                    }

                    // If your number of guesses goes below 1, then it displays "You Lose!" to the HTML.
                    document.getElementById("guesses").innerHTML = guessesLeft;

                    if(guessesLeft < 1){
                        
                        document.getElementById("endgame").innerHTML = "You Lose!";

                }

            }
        }
    }
    };
