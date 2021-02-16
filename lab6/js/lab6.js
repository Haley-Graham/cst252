// Author: Haley Graham
// Created: 16 February
// License: Public Domain

// Define Variables
myTransport= ["Volkswagon Jetta", "rides from friends", "longboard"];
myMainRide= {
  make: "Volkswagon",
  model: "Jetta",
  color: "red",
  year: 2007} ;

// Output
document.writeln("My Wheels: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
