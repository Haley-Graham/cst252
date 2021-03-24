// Author: Haley Graham
// Created: 23 March
// License: Public Domain

// Create a constructor for vehicles called Vehicle, including make, model, year, color, and extras
function Vehicle(make, model, year, color, extras) {
  this.color = color;
  this.year = year;
  this.make = make;
  this.model = model;
  this.extras = extras;

// Add a method info() to your constructor that neatly returns a string with all that information
  this.info = function() {
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
