"use strict";

const API = "https://api.api-ninjas.com/v1/quotes?category=";

const selectInput = document.querySelector(".select");
const form = document.querySelector(".form");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetchQuote(selectInput.value);
});

async function fetchQuote(input) {
  try {
  } catch (err) {}
}
