"use strict";

// listen for a click on the button
function handleUserInput() {
  $(".js-button").click(function(event) {
    event.preventDefault();
    // once button is clicked, collect the number that is in `input`
    const userInput = $('input[id="dog-pics"]').val();
    // add that number to the dogAPI url
    const dogApi = `https://dog.ceo/api/breeds/image/random/${userInput}`;
    console.log(dogApi);
    //use fetch to call the API
    fetch(dogApi)
      .then(response => response.json())
      .then(dogPics => console.log("these are the pics: ", dogPics))
      .catch(err => console.log("error: ", err));
  });
}

handleUserInput();
