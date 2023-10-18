"use strict";
// *SELECTIONS...
const imagesContainer = document.querySelector(".images");
const indicatorsContainer = document.querySelector(".indicators");
const body = document.querySelector("body");
// *STATE VARIABLES...
let currentImage;
let currentInd;
// *FUNCTIONS...
const activeRemover = function (type, currentElement) {
  document.querySelectorAll(`.${type}`).forEach((el) => {
    if (el.dataset.version !== currentElement.dataset.version)
      el.classList.remove(`active-${type}`);
  });
};
const activeToggler = () => currentImage.classList.toggle("active-img");
// *EVENT HANDLERS...
// ! using event delegation...
imagesContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("img")) return;
  if (e.target.classList.contains("active-img")) {
    currentInd.classList.toggle("active-ind");
    activeToggler();
  } else {
    currentImage = e.target;
    activeToggler();
    currentInd = document.querySelector(
      `[data-version="dot-${currentImage.dataset.version}"]`
    );
    currentInd.classList.add("active-ind");
    activeRemover("img", currentImage);
    activeRemover("ind", currentInd);
  }
});
indicatorsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("active-ind")) {
    currentInd.classList.remove("active-ind");
    currentImage.classList.remove("active-img");
  } else {
    currentImage = document.querySelector(
      `[data-version="${e.target.dataset.version.slice(-1)}"]`
    );
    currentInd = document.querySelector(
      `[data-version="dot-${currentImage.dataset.version}"]`
    );
    currentImage.classList.add("active-img");
    currentInd.classList.add("active-ind");
    activeRemover("img", currentImage);
    activeRemover("ind", currentInd);
  }
});
