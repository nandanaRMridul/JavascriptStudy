//Use reduce to calculate the total price:
const cart = [
  { item: "Shoes", price: 60 },
  { item: "T-Shirt", price: 20 },
  { item: "Hat", price: 15 }
];
// Expected: 95


const totalPrice = cart.reduce((acc, item) => {
  return acc += item.price
}, 0)

console.log(totalPrice);