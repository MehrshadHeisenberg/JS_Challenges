"use strict";

function calculateTotalPrice(cartItems, taxRate, discount) {
  let totalPrice = 0;

  for (const item of cartItems) {
    const itemPrice = item.price * item.quantity;
    totalPrice += itemPrice;
  }

  totalPrice += totalPrice * taxRate;
  totalPrice -= totalPrice * discount;

  return totalPrice;
}

module.exports = createHashtags;
