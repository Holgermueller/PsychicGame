'use strict';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    console.log(letters);

//let letter = 

let wins = 0;

let losses = 0;

let livesLeft = 9;

let lettersGuesses = [];

document.onkeyup = function(event) {

    let playerGuesses = event.key;
    console.log(playerGuesses);

}