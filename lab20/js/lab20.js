// Author: Haley Graham
// Created: 27 April
// License: Public Domain

// var URL = "https://xkcd.com/info.0.json";
//
// var URLpre = "https://xkcd.com/";
// var URLpost = "info.0.json";
//
// // Endpoint format: http://xkcd.com/614/info.0.json
//
// function getComic(num) {
//   if (typeof num === 'undefined') {
//     numStr = "";
//   } else {
//     numStr = num.toString() + "/";
//   }
//   var ourURL = URLpre + numStr + URLpost;

 // Use $.ajax() method to retrieve the data in an variable called data
 // Process the parts and add them to your webpage with the appropriate tags.
 $.ajax({
     url: "https://xkcd.com/info.0.json",
     method: "GET",
    success: function(data){
        console.log(data);
// Give the section a title using the data.title key from the object
        $("h3").html(data.title);
// Create an image tag using the data.img key from the object
				var newImage = $("<img>");
				newImage.attr("src", data.img);
				$("#output").append(newImage);
// Give the image an alt attribute using the data.alt key from the object
        $("#altText").html(data.alt);

        // // add event listener to new prev button
        //       $("#prev").click(function(){
        //         getComic(comicNum - 1);
        //       });
        //       // add event listener to new next button
        //       $("#next").click(function(){
        //         getComic(comicNum + 1);
        //       });
    }
})
