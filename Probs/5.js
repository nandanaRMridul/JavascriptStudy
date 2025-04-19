//Turn a cart array into a simple string receipt.

const cart = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 }
];

// ✅ Output: "Pen: 10, Book: 50"
let reciept = cart.map(item => `${item.name}: ${item.price}`
).join(', ');

 console.log(reciept);