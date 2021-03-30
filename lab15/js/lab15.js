// Author: Haley Graham
// Created: 25 March
// License: Public Domain

// Create a constructor for vehicles called Vehicle, including make, model, year, color, and extras
class Vehicle {
  constructor(make, model, year, color, extras) {
    this.color = color;
    this.year = year;
    this.make = make;
    this.model = model;
    this.extras = extras;
  }
  // Add a method info() to your constructor that neatly returns a string with all that information
  info() {
      return this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras;
  }
}
// Instantiate objects with your constructor for every vehicle you've ever owned
var vehicles = [];

vehicles.push(new Vehicle("red", 2007, "Volkswagon", "Jetta", "a few dents and falling headliner"));
vehicles.push(new Vehicle("grey", 2021, "Toyota", "RAV4", "never owned this one, hope to in the future :)"));

// For each instantiated object, call your method info() and output the results to your output div
outputEl = document.getElementById("output");
for (var i=0; i<vehicles.length; i++) {
  var newEl = document.createElement("p");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}
// OOP Design for Hangman

// Understand the Problem
// Pseudocode the High Level Approach
// Assign Actions to Objects
  //Set up the game [Game]
  //  Deside who is the host [Player]
  //  Draw the post for the hangman [Hangman]
  //  Draw the blank spots for every letter of the secret word [Secret Word]
  //Start the game loop [Game]
  //  Other player guesses a letter [Player]
  //   If it is in the secret word, fill in the blank [Secret Word]
  //   Else if it is not in the secret word, write the letter on the side and
  //     draw a body part of the man being hung [Secret Word]
  //   Else the other player figures out the word before the hangman is completely drawn, they win. [Game]
// Make Javascript-ish Pseudocode
// Controls the game play
//class [Game]
    // initialize
        // set up the post for the hangman
        // set up the players
        // assign the host player
    // play
        // loop infinitely
            // player guesses a letter
            // break the loop IF the game is over
            // switch players
    // check_game_over
        // check_deadHangman
        // check_discoverSecretWord
    // check_deadHangman
        // IF the player guesses too many incorrect letters and the hangman is completely drawn
        // losing_combination
            // display a losing message
    // check_discoverSecretWord
        // IF the player player figures out the word before the hangman is completely drawn
        // winning_combination
          // display a winning message
