
// Entry point to the application
// This code runs on page load

// Add event listener to search button

import searchEventHandler from "./eventHandlers/searchEvent.js"

document
  .querySelector("#search-btn")
  .addEventListener("click", searchEventHandler.searchForBreweries);