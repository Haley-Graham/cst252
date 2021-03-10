// Author: Haley Graham
// Created: 10 March
// License: Public Domain

//Create a function sortingHat()
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod ==0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod ==2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

//Create an event listener attached to #button
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText; 
})
