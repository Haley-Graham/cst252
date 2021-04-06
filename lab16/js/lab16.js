// Author: Haley Graham
// Created: 5 April
// License: Public Domain

// Create a <button> element
// Give it a text label
// Add it to your output div
$("#output").append("<button id=my-button>Press Me!");

// Add a click event to it that will bring up an alert
$("#my-button").click(function(){
  alert("Thanks for pressing me :)");
})
// Restyle the button with jQuery so it is a pleasant green.
$("#my-button").css("backgroud-color","chartreuse")
