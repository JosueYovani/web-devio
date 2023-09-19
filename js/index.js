/* Select elements DOM */
const inputSearch = document.querySelector(".dev-search__fields--input");
const divSearch = document.querySelector(".dev-search__fields");

/* Events */
inputSearch.addEventListener("focus", () => {
  divSearch.style.outline = "2px solid blue";
});
inputSearch.addEventListener("blur", () => {
  divSearch.style.outline = "none";
});
