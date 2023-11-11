# Shopping Cart Total Calculator

## Challenge Description:

You are tasked with writing a function that calculates the total price of items in a shopping cart, including tax and discounts. The function should take into account the individual prices of the items, the quantity of each item, the applicable tax rate, and any discounts applied. The function should return the final total price of the shopping cart.

## Difficulty: Easy to Medium

## Tests:

```
Test 1:
Inputs:
cartItems = [
  { name: "Item 1", price: 10, quantity: 2 },
  { name: "Item 2", price: 5, quantity: 3 },
  { name: "Item 3", price: 8, quantity: 1 }
];
taxRate = 0.1; // 10%
discount = 0.2; // 20%

Output: 29.6

Test 2:
Inputs:
cartItems = [
  { name: "Item 1", price: 2.5, quantity: 4 },
  { name: "Item 2", price: 7, quantity: 1 }
];
taxRate = 0.15;
discount = 0.1;

Output: 61.2

Test 3:
Inputs:
cartItems = [
  { name: "Item 1", price: 20, quantity: 3 }
];
taxRate = 0.08
discount = 0.05
Output: "#python #javascript #html"

Test 4:
Input:
cartItems = []
const taxRate = 0.0
discount = 0.2

Output: 0.0
```
