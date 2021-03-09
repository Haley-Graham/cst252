// Author: Haley Graham
// Created: 8 March
// License: Public Domain

//Borrow the sort() function or my anagram() function from Lab 7.
function sortUserName(userName) {
  return userName.toLowerCase("").split("").sort("").join("");
  }

//Attach an event listener to your button that does the following:
//Gets the value of your input field
var button = document.getElementById("my-button");

//Runs that value through your sort() or anagram() function and saves the results.
button.addEventListener('click', function() {
    var inputValue = document.getElementById("user-name").value;
    console.log("Here, I fixed it: ", inputValue);
  });

//Replaces the html in <div id=output> with the results.
document.writeln("Here, I fixed it: ",
  inputValue, "<br>");
