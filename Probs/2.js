//You have a cart with items. Some are discounted. Get the total of only discounted items.

const cart = [
  { name: "Pen", price: 10, isDiscounted: false },
  { name: "Book", price: 40, isDiscounted: true },
  { name: "Bag", price: 70, isDiscounted: true }
];

// ✅ Output: 110

totalDiscounted = cart.filter(item => item.isDiscounted).reduce((acc, item) => {
  return acc += item.price
}, 0)

console.log(totalDiscounted);