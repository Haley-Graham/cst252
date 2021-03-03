// Author: Haley Graham
// Created: 2 March
// License: Public Domain

//Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("lab_details");

//Create a new element with document.createElement("p") and assign it to a variable new1El
var newEl = document.createElement("p");

//Change the html attribute of new1El to say something new.
newEl.innerHTML = "I am the new element";

//Create another new element and assign it to a variable new2El
var new2El = document.createElement("h3")

//Change the html attribute of new2El to say something else.
new2El.innerHTML = "I am the second new element";

//Append both new elements one at a time using appendChild()
outputEl.appendChild(newEl)
outputEl.appendChild(new2El)


//Change the css attributes of at least two elements of your page
newEl.style.fontSize = ("50px")
new2El.style.color = ("#006b09")
