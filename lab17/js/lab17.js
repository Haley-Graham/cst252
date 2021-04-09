// Author: Haley Graham
// Created: 12 April
// License: Public Domain

// Add a click event to each button
// In the event code, toggle a new class within the div
// Go into your css and style each of the classes
// Test each button
$("#details-button").click(function(){
	$("#details-button").toggleClass("newcolor1");
})

$("#challenges-button").click(function(){
  $("#challenges-button").toggleClass("newcolor2");
})

$("#results-button").click(function(){
  $("#results-button").toggleClass("newcolor3");
})
