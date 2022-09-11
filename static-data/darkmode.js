// DOM Selectors
const body = document.querySelector("body");
const switchBtn = document.getElementById("switch");
const root = document.querySelector(":root");

// Change theme
switchBtn.addEventListener("change", () => {
  toggleRootClass();
});

function toggleRootClass() {
  document.querySelector(":root").classList.toggle("dark");
}