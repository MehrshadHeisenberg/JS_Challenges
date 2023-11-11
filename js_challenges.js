"use strict";

function calculateTotalPrice(cartItems, taxRate, discount) {
  const totalWithoutTaxDiscount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalWithTax =
    totalWithoutTaxDiscount * taxRate + totalWithoutTaxDiscount;

  const totalPrice = totalWithTax - totalWithTax * discount;

  return +totalPrice.toFixed(1);
}

module.exports = calculateTotalPrice;
