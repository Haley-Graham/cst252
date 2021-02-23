// Author: Haley Graham
// Created: 22 February
// License: Public Domain

// accepts an array and sorts
function sortUserName() {
  //define variables
  var userName = window.prompt("Hi, Please tell me you name so I can fix it.");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to stringif
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // Note that there was a way easier way, but I dod not read that far.
  //    userName.toLower().split("").sort().join("")
  return nameSorted;
}

// Output
document.writeln("Oh hey, I've fixed your name: ",
  sortUserName(), "<br>");
