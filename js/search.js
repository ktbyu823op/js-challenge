const searchForm = document.querySelector(".search__form");
const searchInput = document.querySelector(".search__input");

function onSearchSubmit(event) {
  event.preventDefault();
  const searchWords = searchInput.value;
  searchInput.value = "";
  const googleUrl = `https://www.google.com/search?q=${searchWords}`;
  window.open(googleUrl);
}

searchForm.addEventListener("submit", onSearchSubmit);
