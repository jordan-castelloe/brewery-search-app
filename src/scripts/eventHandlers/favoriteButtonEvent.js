// This module is responsible for adding event listeners to the "Add to my favorites" button and handling what happens when the user clicks one of those buttons

// For now, we're storing the user's favorites in an array inside the favoriteButtonEventHandler object.

// When the user clicks the button, the favorited brewery will be pushed into the array. Then we can use our domPrinter.printBreweryList() method to print out all the favorited breweries.

// Here's the hard part... how do we figure out which brewery they clicked on???

// Go back and look at domPrinter.printSingleBrewery(). In that method, we built HTML string to represent a single brewery, including its favorite button. We gave that button an id that matched that brewery's index inside the array that came back from the API.

// We're going to use that id to figure out the index of the brewery they clicked on in the original array. Then we're going to use it to dig into the array, get that same brewery object that they clicked on, and push it into the myFavorites array.

import domPrinter from '../domPrinter.js'

const favoriteButtonEventHandler = {
    // This will store our favorited breweries
  myFavorites: [],
  // This method accepts a single parameter- the breweries that came back from the API. The brewries from the API will be stored in an array. We'll need to dig into this array to get the brewery that the user clicked on.
  addEventListenersToFavoriteButtons: function(breweriesFromAPI) {
      // Select all the save buttons and loop through them
    document.querySelectorAll(".save-btn").forEach(singleSaveButton => {
        // Add an event listener to each save button
      singleSaveButton.addEventListener("click", () => {
          // When the user clicks on a save button, the button's id.
          // This id will correspond to its index in the original array of breweries from the API
          // For example, if a brewery came back from the API at position 0, its id would be save-brewery-0. We want to store just the index of 0 in our favoriteId variable
        const favoriteId = event.target.id.split("-")[2];

        // Now we can use that index to dig into the array that came back from the API. If the user clicked on save-brewery-0, we'd now want to do breweriesFromAPI[0] to get the brewery object
        const thingToPrint = breweriesFromAPI[favoriteId];

        // Once we have the brewery object, we can add it to our favorites array
        this.myFavorites.push(thingToPrint);

        // Now we reuse the method we already wrote to print an array of breweries to the DOM.
        domPrinter.printBreweryList(
          "My Favorites",
          this.myFavorites,
          "favorites"
        );
      });
    });
  }
};

export default favoriteButtonEventHandler

// A note about event delegation: We have to add the event listener to each favorite button directly because we need to access the data that's coming back from the API. This function will run EVERY TIME we click "search". If we added the event listener to the "#container" and tried to use event delegation, it would keep adding event listeners every time we searched and we'd be doubling up.
