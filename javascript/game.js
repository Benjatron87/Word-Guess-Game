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

var blanks = [];
var win = true;
var guessesLeft = 10;
var blanksDIV;
var blankVar = "";
var randNum = Math.floor(Math.random() * words.length );
var randomWord = words[randNum]
var letters = randomWord.split("");

var DOMblanks = document.getElementById("blanks");
var DOMguesses = document.getElementById("guesses");
document.getElementById("guesses").innerHTML = guessesLeft;

for(var k = 0; k < letters.length; k++){
        blanks.push("_ ");
}

document.onkeypress = function(event) {

    for(var l = 0; l < blanks.length; l++){

        var blanksDIV = document.createElement("a");

        blanksDIV.textContent = blanks[l];

        DOMblanks.appendChild(blanksDIV);

    }

    guessesLeft--;

    document.getElementById("guesses").innerHTML = guessesLeft;

    event = event || window.event;

    var charCode = event.keyCode || event.which;

    var guess = String.fromCharCode(charCode);

    guess = guess.toUpperCase();

    for (var i = 0; i < letters.length; i++){

        if (guess == letters[i]){

            blanks[i] = guess;
        
        }
        blankVar = blankVar + blanks[i];
    }
    document.getElementById("blanks").innerHTML = blankVar;
    
    blankVar = "";

    console.log(blanks);
    console.log(letters);

    if(blanks == letters){

        var endgame = document.createElement("a");

        endgame.textContent = "YOU WIN!!";

        DOMblanks.appendChild(endgame);

        win = false;
    }
};
