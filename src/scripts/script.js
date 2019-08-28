
// Entry point to the application
// This code runs on page load

// Add event listener to search button

import searchHandler from "./eventHandlers/searchEvent.js"

document
  .querySelector("#search-btn")
  .addEventListener("click", searchHandler.searchForBreweries);


  // This won't work! the favorites array is stored in a module and isn't being exported
//   console.log("my favorites from favoriteButtonEventHandler", myFavorites)