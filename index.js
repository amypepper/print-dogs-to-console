"use strict";

// listen for a click on the button
function handleUserInput() {
  $(".js-button").click(function(event) {
    event.preventDefault();
    // once button is clicked, collect the number that is in `input`
    const userInput = $('input[id="dog-pics"]').val();
    // add that number to the dogAPI url
    const dogApi = `https://dog.ceo/api/breeds/image/random/${userInput}`;

    // prevent API from being called if user enters number over 50
    if (userInput > 50) {
      $(".image-results").html(
        `<p role="alert" class="error-msg">That's too many dogs! Please choose a number between 1 and 50</p>`
      );
    } else {
      callDogApi(dogApi);
    }
  });
}

function callDogApi(url) {
  //use fetch to call the API
  fetch(url)
    .then(response => response.json())
    .then(dogPics => console.log("these are the pics: ", dogPics))
    .catch(err => console.log("error: ", err));
}

handleUserInput();
