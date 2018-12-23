// a random number generator that picks out a word from an array

// count the number of letters in that word and display the number with underscores.

// prompt user to guess a letter

// compare that letter to all the letters in the word.

// if there is a match, replace that respective underscore with the correct letter.

// if it does not match any letters, remove a "life".

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

    var lettersWord;
    var blanksWord;

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        //  State necessary global variables
        var blanks = [];
        var guessesLeft = 10;
        var blankVar = "";
        var guessNum = 0;

        // State variables to link to HTML
        var DOMblanks = document.getElementById("blanks");

        document.getElementById("guesses").innerHTML = guessesLeft;
        document.getElementById("endgame").innerHTML = "";
        document.getElementById("wrong-guess").innerHTML = " ";
        
        
        var randNum = Math.floor(Math.random() * words.length );
        var randomWord = words[randNum];
        var letters = randomWord.split("");

       

        for(var l = 0; l < blanks.length; l++){

            var blanksDIV = document.createElement("a");

            blanksDIV.textContent = blanks[l];

            DOMblanks.appendChild(blanksDIV);

        }

        for(var k = 0; k < letters.length; k++){
            blanks.push("_ ");
    }

        lettersWord = 1;
        blanksWord = 0;

        console.log(blanksWord);
        console.log(lettersWord);

        console.log(blanks);
        console.log(letters);  

            document.onkeypress = function(event) {

                if(guessesLeft > 0 && (blanksWord !== lettersWord)){
                
                document.getElementById("guesses").innerHTML = guessesLeft;

                console.log(guessesLeft);

                event = event || window.event;

                var charCode = event.keyCode || event.which;

                var guess = String.fromCharCode(charCode);

                guess = guess.toUpperCase();

                var guessRight = false;

                for (var i = 0; i < letters.length; i++){

                    if (guess == letters[i]){

                        guessRight = true;
                        blanks[i] = guess;
                    }
                    blankVar = blankVar + blanks[i];
                }

                document.getElementById("blanks").innerHTML = blankVar;

                console.log(guessNum);
                
                blankVar = "";

                console.log(blanks);
                console.log(letters);

                var blanksWord = blanks.join("");
                var lettersWord = letters.join("");

                console.log(blanksWord);
                console.log(lettersWord);
                
                if (blanksWord == lettersWord){

                    document.getElementById("endgame").innerHTML = "You Win!";
                }

                if (guessRight == false){

                    guessesLeft--;

                    document.getElementById("wrong-guess").innerHTML += guess;
                }

                document.getElementById("guesses").innerHTML = guessesLeft;

                if(guessesLeft < 1){
                    
                    document.getElementById("endgame").innerHTML = "You Lose!";

                }

            }
        }
    }
    };
