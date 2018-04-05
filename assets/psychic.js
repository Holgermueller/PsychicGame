'use strict';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //console.log(letters);

//generate letter to be guesses
let letter = letters[Math.floor(Math.random() * letters.length)];
    console.log(letter);

//variables for game play
let wins = 0;

let losses = 0;

let livesLeft = 9;

let lettersGuesses = [];

//capture players keyups
document.onkeyup = function(event) {
    let playerGuesses = event.key;
        console.log(playerGuesses);
        //code for winning conditions
        if (playerGuesses === letter) {
            wins = wins + 1;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            livesLeft = 9;
            reset();
            console.log(wins);
            //code for when a player guesses wrong letter
        } else if (playerGuesses !== letter) {
            livesLeft = livesLeft - 1;
            document.querySelector("#livesLeft").innerHTML = "Lives Left: " + livesLeft;
            console.log(livesLeft);
            document.querySelector("#lettersGuessed").innerHTML = "Letters Guessed: " + playerGuesses;
            //code for losing conditions
        } if (livesLeft === 0) {
            losses + 1;
            document.querySelector("#losses").innerHTML = "Losses:" + losses + 1;
            reset2();
        }
}

//player guesses correct letter, letter to guess resets
function reset() {
    letter = letters[Math.floor(Math.random() * letters.length)];
}

//player wins or loses, livesLeft resets to 9
function reset2() {
    let livesLeft = 9;
}