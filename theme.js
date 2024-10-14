// Set the permanent image to cover1.webp
document.getElementById("carouselImage").src = "cover1.webp";

// Set the permanent color set for cover1
const colorSet = {
  "--text-color": "#c0caf5",
  "--hover-color": "#bb9af7",
  "--accent-color": "#7aa2f7",
  "--accent-color-2": "#f7768e",
  "--background-color": "#1a1b26",
};

// Iterate through the colorSet and set the CSS variables
for (const [property, value] of Object.entries(colorSet)) {
  document.documentElement.style.setProperty(property, value);
}

// When the page loads, apply the loaded class to the image and text
window.onload = function () {
  document.getElementById("image").classList.add("loaded");
  document.getElementById("text").classList.add("loaded");
  document.getElementsByTagName("html")[0].classList.add("loaded");
};
