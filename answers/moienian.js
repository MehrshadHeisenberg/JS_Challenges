function cartTotal(cartItems, taxRate, discount) {
  let totalPrice = 0;
  cartItems.map(({ price, quantity }) => {
    totalPrice += price * quantity;
  });
  totalPrice += totalPrice * taxRate;
  totalPrice -= totalPrice * discount;
  return +totalPrice.toFixed(1);
}

module.exports = cartTotal;
