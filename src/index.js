function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-from-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.ariaValueMax;
}

let searchFromElement = document.querySelector("#search-from");
searchFromElement.addEventListener("submit", handleSearch);
