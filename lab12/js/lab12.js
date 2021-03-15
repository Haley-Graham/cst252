// Author: Haley Graham
// Created: 15 March
// License: Public Domain

// Create a  function loop through numbers 1 to 200, listing them
document.getElementById("button").addEventListener("click", function() {
var outputEl  = document.getElementById("output");

// If the number is a multiple of 3, if should print "Fizz!"
var factor1 = 3;
// If the number is a multiple of 5, it should print "Buzz!"
var factor2 = 5;
// If the number is a multiple of 7, it should print "Boom!"
var factor3 = 7;
  for (var i=1; i<=200; i++) {
    var str = '';
    if (i % factor1 == 0) {
      str += "Fizz";
    }
    if (i % factor2 == 0) {
      str += "Buzz";
    }
    if (i % factor3 == 0) {
      str += "Boom";
    }

// If the number is a multiple of more than one 3, 5 or 7
    if (str == "") {
      str = i;
    }
    else {
      str += '!';
    }

// Make it so the output of your program appears in your output div
    var newEl = document.createElement("p");
    newEl.innerText = str;
    outputEl.appendChild(newEl);
  }
});
