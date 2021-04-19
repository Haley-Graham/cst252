// Author: Haley Graham
// Created: 19 April
// License: Public Domain

var endpoint = "https://api.kanye.rest/";
// Add a click event to the button
$("#activate").click(function(){
	$("#output").append("<p>Howdy!</p>");
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API
  $.ajax({
      url: endpoint,
      data: { },
      type: "GET",
  })
  // Put the output of the AJAX call in the output div.
  .done(function( data ) {
      $("#output").append("<p>" + data + "</p>");
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
  });

})
