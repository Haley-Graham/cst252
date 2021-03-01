// Author: Haley Graham
// Created: 28 February
// License: Public Domain


function isEven(x){
  return (x % 2 ==0);
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));


array = [100, 65, 27, 83, 96, 123]
console.log("My Array", array);

var result = array.map(isEven);
//should return [true, false, false, false, true, false]
console.log("Test the evenness of array:", result);
var result = array.map(function(x){
  return x ** 0.5;
})
//should return  [10, 8.06225774829855, 5.196152422706632, 9.1104335791443, 9.797958971132712, 11.090536506409418]
console.log("Squareroot of array:", result);
