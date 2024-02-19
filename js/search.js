const searchForm = document.querySelector(".search__form");
const searchInput = document.querySelector(".search__input--google");
const searchIcon = document.querySelector(".search__icon");
const searchChangeBtn = document.querySelector(".search__change-btn");

function onSearchSubmit(event) {
  event.preventDefault();
  if (searchInput.classList.contains("search__input--google")) {
    searchOnGoogle();
  } else {
    searchOnNaver();
  }
}

function searchOnGoogle() {
  const searchWords = searchInput.value;
  searchInput.value = "";
  const googleUrl = `https://www.google.com/search?q=${searchWords}`;
  location.href = googleUrl;
}

function searchOnNaver() {
  const searchWords = searchInput.value;
  searchInput.value = "";
  const naverUrl = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${searchWords}`;
  location.href = naverUrl;
}

function onSearchChangeBtnClick() {
  if (searchInput.classList.contains("search__input--google")) {
    searchInput.placeholder = "Naver Search";
  } else {
    searchInput.placeholder = "Google Search";
  }

  searchInput.classList.toggle("search__input--google");
  searchInput.classList.toggle("search__input--naver");

  searchIcon.classList.toggle("search__icon--google");
  searchIcon.classList.toggle("search__icon--naver");

  searchChangeBtn.classList.toggle("search__change-btn--naver");
}

searchForm.addEventListener("submit", onSearchSubmit);
searchChangeBtn.addEventListener("click", onSearchChangeBtnClick);
