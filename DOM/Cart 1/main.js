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

////////////////////////////////
// Initialization
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
////////////////////////////////

function addToCart(id) {
  const addedProduct = products.find((p) => p.id === +id);
  const index = cart.indexOf(cart.find((p) => p.id === addedProduct.id));

  index === -1
    ? cart.push({ ...addedProduct, quantity: 1 })
    : (cart[index] = { ...addedProduct, quantity: cart[index].quantity + 1 });

  updateCartItems(id, index);
}

function removeFromCart(id) {
  const index = cart.indexOf(cart.find((p) => p.id === +id));
  cart[index].quantity--;

  updateCartItems(id, index);
}

function updateCartItems(id, index = -1) {
  const product = cart.find((p) => p.id === +id);
  const { quantity, price, title } = product;

  if (quantity === 0) {
    const removed = [...document.querySelectorAll(".cart-item")].find(
      (p) => +p.dataset.id === +id
    );

    removed.remove();
    cart.splice(index, 1);
  }

  if (quantity === 1 && index !== -1) {
    const removed = [...document.querySelectorAll(".cart-item")].find(
      (p) => +p.dataset.id === +id
    );

    removed.innerHTML = `
    <h3 class="cart-item-title">${title}</h3>
    <div class="product-stat">
      <button class="cart-remove-btn product-btn" data-action='remove'>-</button>
      <p>Quantity: 1 & Price: ${price}</p>
      <button class="cart-add-btn product-btn" data-action='add'>+</button>
    </div>
`;
  }

  if (quantity === 1 && index === -1) {
    const html = `
    <li class="cart-item" data-id="${id}">
      <h3 class="cart-item-title">${title}</h3>
      <div class="product-stat">
        <button class="cart-remove-btn product-btn" data-action='remove'>-</button>
        <p>Quantity: 1 & Price: ${price}</p>
        <button class="cart-add-btn product-btn" data-action='add'>+</button>
      </div>
    </li>
  `;
    cartModal.insertAdjacentHTML("beforeend", html);
  }

  if (quantity > 1) {
    const added = [...document.querySelectorAll(".cart-item")].find(
      (p) => +p.dataset.id === +id
    );

    added.innerHTML = `
        <h3 class="cart-item-title">${title}</h3>
        <div class="product-stat">
          <button class="cart-remove-btn product-btn" data-action='remove'>-</button>
          <p>Quantity: ${quantity} & Price: ${price}</p>
          <button class="cart-add-btn product-btn" data-action='add'>+</button>
        </div>
    `;
  }
}

function updateUI(cart) {
  // Update modal title text
  cart.length === 0
    ? (cartModalTitle.textContent = "Nothing added to the cart yet!")
    : (cartModalTitle.textContent = `You have ${cart.length} items in your cart 👍`);

  // Calculate the total price
  totalPrice = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
  totalPriceEl.textContent = `${totalPrice.toFixed(2)}$`;
}

function toggleModal() {
  cartBackground.classList.toggle("open");
  cartBox.classList.toggle("open");
}

// Event Listeners
cardsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".add-btn");
  if (!clicked) return;

  const id = clicked.closest(".card").dataset.id;
  addToCart(id);
});

cartBtn.addEventListener("click", function (e) {
  updateUI(cart);

  toggleModal();
});

cartBackground.addEventListener("click", function (e) {
  toggleModal();
});

cartModal.addEventListener("click", function (e) {
  const clicked = e.target.closest(".product-btn");
  if (!clicked) return;

  const action = clicked.dataset.action;
  const id = clicked.closest(".cart-item").dataset.id;

  if (action === "add") {
    addToCart(id);
    updateUI(cart);
  }

  if (action === "remove") {
    removeFromCart(id);
    updateUI(cart);
  }
});

// Initialization
getProducts();
