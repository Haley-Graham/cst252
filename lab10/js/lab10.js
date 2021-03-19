// Author: Haley Graham
// Created: 8 March
// License: Public Domain

//Borrow the sort() function or my anagram() function from Lab 7.
//Thanks to Wes Modes
// shuffleArray - take an array and shuffle the contents
// Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function reorderUserName(word) {
    var wordArray = word.toLowerCase().split('');
    var newArray = shuffleArray(wordArray);
    return newArray.join('');
}

//Attach an event listener to your button that does the following:
//Gets the value of your input field
var button = document.getElementById("my-button");

//Runs that value through your sort() or anagram() function and saves the results.
button.addEventListener("click", function() {
    var inputValue = document.getElementById("user-name").value;
    var userName = reorderUserName(inputValue);
    newText = "<p>Here, I fixed it: " + userName + "</p>";

//Replaces the html in <div id=output> with the results.
    document.getElementById("output").innerHTML = newText;
  });
