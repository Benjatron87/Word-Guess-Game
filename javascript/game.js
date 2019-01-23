
// An array of common ultimate terms.
var words = [
    "SCOOBER",
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

var wrongGuesses = [];


// Game starts upon pressing the space button.
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        //  Make an empty "blanks" array to be filled later.
        var blanks = [];

        // Make an empty array for the letters guessed.
        var guessed = [];

        // Set the number of guesses for each round.
        var guessesLeft = 10;

        // State other necessary variables.
        var blankVar = "";
        var blankVar2 = "";
        var blankVar3 = "";
        var guessNum = 0;

        // Prompt the user as to what to do next.
        document.getElementById("keys").innerHTML = "Press any Letter to Guess!";

        // Sets background color.
        document.getElementById("body").style.backgroundColor = "whitesmoke";

        // Set some HTML values.
        document.getElementById("guesses").innerHTML = guessesLeft;
        document.getElementById("endgame").innerHTML = "";
        document.getElementById("wrong-guess").innerHTML = " ";
        
        // Getting a random number to choose a random word from the "words" array above.
        var randNum = Math.floor(Math.random() * words.length );
        var randomWord = words[randNum];

        // Converting that random word into and array of its own.
        var letters = randomWord.split("");

        // Adding the appropriate number of underscores to the "blanks" array.
        for(var k = 0; k < letters.length; k++){
            blanks.push("_" + "\xa0");
        }

        // Adds each element of the "blanks" array individually to the HTML. 
        for(var l = 0; l < blanks.length; l++){

            blankVar2 = blankVar2 + blanks[l];
        }

        document.getElementById("blanks").innerHTML = blankVar2;

        // Resets these variables for a new game.
        var lettersWord = true;
        var blanksWord = false;

        console.log(blanksWord);
        console.log(lettersWord);

        console.log(blanks);
        console.log(letters);  

            // When any key is pressed it acts as a guess and the following processes are run.
            document.onkeypress = function(event) {

                // Captures the value of the key pressed and puts it in the variable charCode.
                event = event || window.event;

                var charCode = event.keyCode || event.which;

                    // As long as there are more guesses left, the word has not been guessed in full, and the key pressed is a letter.
                    if(guessesLeft > 0 && (blanksWord !== lettersWord && charCode >= 97 && charCode <= 121)){
                    
                        document.getElementById("guesses").innerHTML = guessesLeft;

                        console.log(guessesLeft);

                        // Figures out which letter was pressed and adds that to the "guess" variable.
                        var guess = String.fromCharCode(charCode);

                        guess = guess.toUpperCase();

                        // Create a boolean variable for the following "if" statement.
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
                        console.log(guess);

                        // If your guess was wrong, it adds the letter guessed to the HTML and removes 1 from the guesses left.
                        if (guessRight == false){

                            var exists = wrongGuesses.indexOf(guess);

                            console.log(exists);

                            if(exists == -1){

                                guessesLeft--;

                                wrongGuesses.push(guess);

                                document.getElementById("wrong-guess").innerHTML += guess;
                            }
                        }


                        // Turns the "blanks" and "letters" arrays into strings that can be compared with each other.
                        blanksWord = blanks.join("");
                        lettersWord = letters.join("");

                        console.log(blanksWord);
                        console.log(lettersWord);
                        
                        // If the strings "blanksWord" and "lettersWord" match, then "You Win!" is displayed in the HTML.
                        if (blanksWord == lettersWord){

                            document.getElementById("endgame").style.color = "yellowgreen";

                            document.getElementById("body").style.backgroundColor = "yellowgreen";

                            document.getElementById("endgame").innerHTML = "You Win!";

                            document.getElementById("keys").innerHTML = "Press Space to Start a New Game";
                        }

                        // If your number of guesses goes below 1, then it displays "You Lose!" to the HTML.
                        document.getElementById("guesses").innerHTML = guessesLeft;

                        if(guessesLeft < 1){
                            
                            document.getElementById("endgame").innerHTML = "You Lose!";

                            document.getElementById("endgame").style.color = "red";

                            document.getElementById("body").style.backgroundColor = "red";

                            document.getElementById("keys").innerHTML = "Press Space to Start a New Game";

                            document.getElementById("blanks").innerHTML = lettersWord;

                    }
                }

            }
        }
    
    };
