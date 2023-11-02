"use strict";

const cardsContainer = document.querySelector(".cards");
const cartBtn = document.querySelector(".cart-btn");
const cartBackground = document.querySelector(".modal-background");
const cartModal = document.querySelector(".cart-modal");
const cartBox = document.querySelector(".cart-box");
const cartModalTitle = document.querySelector(".cart-modal-title");
const totalPriceEl = document.querySelector(".total-price");

const API = `https://fakestoreapi.com`;

const products = [];
const cart = [];
let totalPrice = 0;

async function getProducts() {
  try {
    cardsContainer.innerHTML = "";
    const res = await fetch(`${API}/products`);
    const data = await res.json();
    data.forEach((product) => {
      products.push({ ...product, quantity: 0 });
    });

    products.forEach((product) => addProduct(product));
  } catch (err) {
    console.error(err);
  }
}

function addProduct(product) {
  const { image, description, title, price, id } = product;

  const html = `
    <li class="card" data-id='${id}'>
      <figure class="img-box">
       <img src="${image}" alt="${description}" class="img" />
     </figure>
      <h2 class="card-title">${title}</h2>
      <button class="add-btn btn">Add to cart</button>
      <p class="price">${price}$</p>
  </li>
`;

  cardsContainer.insertAdjacentHTML("afterbegin", html);
}
