'use strict';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

//generate letter to be guesses
let letter = letters[Math.floor(Math.random() * letters.length)];

//variables for game play
let wins = 0;
let losses = 0;
let livesLeft = 9;
let lettersGuesses = [];

//capture players keyups
document.onkeyup = event => {
    let playerGuesses = event.key;
    let letter = letters[Math.floor(Math.random() * letters.length)];
    document.querySelector("#theLetter").innerHTML = "?";
    //code for winning conditions
    if (playerGuesses === letter) {
        wins = wins + 1;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        livesLeft = 9;
        reset();
        lettersGuesses = [];
        document.querySelector("#lettersGuessed").innerHTML = "Letters Guessed: " + " ";
        //code for when a player guesses wrong letter
    } else if (playerGuesses !== letter) {
        livesLeft = livesLeft - 1;
        document.querySelector("#livesLeft").innerHTML = "Lives Left: " + livesLeft;
        //append incorrect guesses
        document.querySelector("#lettersGuessed").append("" + playerGuesses + ", ");
        //code for losing conditions
    } if (livesLeft === 0) {
        losses = losses + 1;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        livesLeft = 9;
        document.querySelector("#livesLeft").innerHTML = "Lives Left: " + livesLeft;
        //reveal letter
        document.querySelector("#theLetter").innerHTML = letter;
        lettersGuesses = [];
        document.querySelector("#lettersGuessed").innerHTML = "Letters Guessed: " + " ";
    }
}

//player guesses correct letter, letter to guess resets
function reset() {
    letter = letters[Math.floor(Math.random() * letters.length)];
}

document.onclick = function startOver() {
    reset()
    losses = losses + 1;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    livesLeft = 9;
    document.querySelector("#livesLeft").innerHTML = "Lives Left: " + livesLeft;
    lettersGuesses = [];
    document.querySelector("#lettersGuessed").innerHTML = "Letters Guessed: " + " ";
}