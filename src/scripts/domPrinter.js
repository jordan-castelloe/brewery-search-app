// Private method to this module! This function will only be called from within the printBreweryList() method, so we can export printBreweryList() and keep printSingleBrewery encapsulated

  // Prints a single brewery card. Gives that brewery a unique id attribute that contains its index in the original array
const printSingleBrewery = (singleBrewery, index) => `
<div id="brewery-${index}">
    <h4>${singleBrewery.name}</h4>
    <p>${singleBrewery.city}</p>
    <p>Phone: <a href="tel:${singleBrewery.phone}">${singleBrewery.phone}</a></p>
    <button class="save-btn" id="save-brewery-${index}">Add To My Favorites</button>
</div>
`

const domPrinter = {

    // Loops through an array of breweries, calls the printSingleBreweryFunction in a loop to build up an HTML string
    // Accepts a heading, an array of breweries, and a containerId so that we can reuse this to print our search results and our favorites
  printBreweryList: function (heading, breweryArray, containerId) {
    let htmlString = `<h2>${heading}</h2>`;
    breweryArray.forEach((brewery, i) => {
      htmlString += printSingleBrewery(brewery, i);
    });
    document.querySelector(`#${containerId}`).innerHTML = htmlString;
  }
};



export default domPrinter;
