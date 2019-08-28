const apiManager = {
  // Search for a brewery based on user input
  getFromBreweryAPI: searchInputParam =>
    fetch(
      `https://api.openbrewerydb.org/breweries?by_state=${searchInputParam}`
    ).then(response => response.json())
};
