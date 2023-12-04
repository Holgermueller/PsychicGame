"use strict";

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let letter = letters[Math.floor(Math.random() * letters.length)];

let wins = 0;
let losses = 0;
let livesLeft = 9;
let lettersGuesses = [];

document.onkeyup = (event) => {
  let playerGuesses = event.key;
  let letter = letters[Math.floor(Math.random() * letters.length)];
  document.querySelector("#theLetter").innerHTML = "?";
  if (playerGuesses === letter) {
    wins = wins + 1;
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    livesLeft = 9;
    reset();
    lettersGuesses = [];
    document.querySelector("#lettersGuessed").innerHTML = " ";
  } else if (playerGuesses !== letter) {
    livesLeft = livesLeft - 1;
    document.querySelector("#livesLeft").innerHTML = "Lives Left: " + livesLeft;
    document.querySelector("#lettersGuessed").append("" + playerGuesses + ", ");
  }
  if (livesLeft === 0) {
    losses = losses + 1;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    livesLeft = 9;
    document.querySelector("#livesLeft").innerHTML = "Lives Left: " + livesLeft;
    document.querySelector("#theLetter").innerHTML = letter;
    lettersGuesses = [];
    document.querySelector("#lettersGuessed").innerHTML = " ";
  }
};

function reset() {
  letter = letters[Math.floor(Math.random() * letters.length)];
}

document.onclick = function startOver() {
  reset();
  losses = losses + 1;
  document.querySelector("#losses").innerHTML = "Losses: " + losses;
  livesLeft = 9;
  document.querySelector("#livesLeft").innerHTML = "Lives Left: " + livesLeft;
  lettersGuesses = [];
  document.querySelector("#lettersGuessed").innerHTML = " ";
};

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
