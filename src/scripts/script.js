
// Entry point to the application
// This code runs on page load

// Add event listener to search button
document
  .querySelector("#search-btn")
  .addEventListener("click", searchEventHandler.searchForBreweries);