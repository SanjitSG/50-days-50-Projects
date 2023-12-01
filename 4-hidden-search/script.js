const btn = document.querySelector("button");
const input = document.querySelector("input");
const search = document.querySelector(".search");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus(); // adds blinking like to search bar (i.e. input)
});
