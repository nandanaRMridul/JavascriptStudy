/* Given an array of gadgets:
const gadgets = [
{ id: 1, name: "Smartphone", price: 699, inStock: true },
{ id: 2, name: "Laptop", price: 1199, inStock: false },
{ id: 3, name: "Smartwatch", price: 199, inStock: true },
{ id: 4, name: "Tablet", price: 499, inStock: true }
];
Perform the following tasks:
 Print the names of all gadgets.
 Print the gadgets that are in stock.
 Print the gadgets whose price is greater than 500.
 Calculate and print the total price of all gadgets that are in stock. */

const gadgets = [
  { id: 1, name: "Smartphone", price: 699, inStock: true },
  { id: 2, name: "Laptop", price: 1199, inStock: false },
  { id: 3, name: "Smartwatch", price: 199, inStock: true },
  { id: 4, name: "Tablet", price: 499, inStock: true },
];

//Print the names of all gadgets.
console.log(gadgets.map(g => g.name).join(", "));
console.log("------------------------------------------------------");

// Print the gadgets that are in stock.
console.log(gadgets.filter((g) => g.inStock));
console.log("------------------------------------------------------");

// Print the gadgets whose price is greater than 500.
console.log(gadgets.filter((g) => g.price > 500));
console.log("------------------------------------------------------");

// Calculate and print the total price of all gadgets that are in stock.
console.log(gadgets.reduce(((sum, g) => sum+=g.price), 0));
console.log("------------------------------------------------------");