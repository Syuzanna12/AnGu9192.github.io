const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar")[0];
/* start */
const search = document.getElementById("search");
const searchInput = document.getElementById("search-input");
/* end */

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

function toggleNav(x) {
  x.classList.toggle("change");
}

/* start */
search.addEventListener("click", () => {
  searchInput.classList.toggle("active1");
});
/* end */
