'use strict';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //console.log(letters);

let letter = letters[Math.floor(Math.random() * letters.length)];
    console.log(letter);

let wins = 0;

let losses = 0;

let livesLeft = 9;

let lettersGuesses = [];

document.onkeyup = function(event) {

    let playerGuesses = event.key;
        console.log(playerGuesses);
        if (playerGuesses === letter) {
            wins++;
            wins = document.querySelector("#wins").innerHTML = "Wins:" + wins;
            livesLeft = 9;
            console.log(wins);
        } else if (playerGuesses != letter) {
            livesLeft--;
            livesLeft = document.querySelector("#livesLeft").innerHTML = "Lives Left:" + livesLeft;
            console.log(livesLeft);
            lettersGuesses = document.querySelector("#lettersGuessed").innerHTML = "Letters Guessed:" + playerGuesses;

        }

}