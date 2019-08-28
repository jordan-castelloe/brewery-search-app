import domPrinter from '../domPrinter.js'
import apiManager from '../apiManager.js'
import favoriteButtonEventHandler from './favoriteButtonEvent.js'

const searchEventHandler = {
  searchForBreweries: () => {
      // Get the user's input
    const stateInputValue = document.querySelector("#search-input").value;

    // If the state has a space in it, replace it with an underscore so that it's compatible with the API query string
    if(stateInputValue.includes(" ")){
        stateInputValue.replace("_", " ")
    }

    // Search API based on input
    apiManager.getFromBreweryAPI(stateInputValue).then(parsedBreweries => {

        // Print the brewery list
      domPrinter.printBreweryList("All Breweries", parsedBreweries, "container");

      // Add the event handlers to the favorite buttons
      // This needs to accept a parameter of parsedBreweries (ie the respone from the API because it will use that array to figure out which brewery you clicked on-- each favorite button has the index of the brewery as part of its id)
      favoriteButtonEventHandler.addEventListenersToFavoriteButtons(parsedBreweries);
    });
  }
};

export default searchEventHandler;
