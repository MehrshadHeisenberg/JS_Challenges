"use strict";

const tabContainer = document.querySelector(".tabs");
const allTabs = document.querySelectorAll(".tab");
const contentBox = document.querySelector(".tab-content");

const tabContents = [
  {
    title: "JS_Challenges?!",
    text: " JS_Challenges => A great Telegram channel to learn and explore JavaScript!",
    id: 1,
  },
  {
    title: "Where are the challenges?",
    text: "Inside a big repository called JS_Challenges!",
    id: 2,
  },
  {
    title: "Don't forget to ...",
    text: "Don't forget to like, share and follow!",
    id: 3,
  },
];

// Event Propagation
tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab");
  if (!clicked) return;

  allTabs.forEach((tab) => {
    tab.classList.remove("selected");
  });
  clicked.classList.add("selected");

  const selectedId = Number(clicked.dataset.id);
  const selectedContent = tabContents.find(
    (content) => content.id === selectedId
  );
  const html = `
    <h2 class="tab-title">${selectedContent.title}</h2>
    <p class="tab-exp">
    ${selectedContent.text}
    </p>
    `;
  // beforebegin
  // contentBox
  // afterbegin
  // .....
  // beforeend
  // contentBox
  // afterend
  contentBox.innerHTML = "";
  contentBox.insertAdjacentHTML("beforeend", html);
});
