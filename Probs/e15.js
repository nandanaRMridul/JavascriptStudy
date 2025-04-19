/* const products = [
{ id: 1, name: "Laptop", price: 900, inStock: true },
{ id: 2, name: "Phone", price: 500, inStock: false },
{ id: 3, name: "Tablet", price: 300, inStock: true },
{ id: 4, name: "Headphones", price: 100, inStock: true }
];
Perform the following operations:
 Print all product names.
 Print products that are in stock.
 Print products that have a price greater than 400.
 Calculate the total revenue if all products are sold out */

const products = [
  { id: 1, name: "Laptop", price: 900, inStock: true },
  { id: 2, name: "Phone", price: 500, inStock: false },
  { id: 3, name: "Tablet", price: 300, inStock: true },
  { id: 4, name: "Headphones", price: 100, inStock: true },
];

console.log(products.map(p => p.name).join(", "));

console.log(products.filter(p => p.inStock && p));

console.log(products.filter(p => p.price > 400));

console.log(
  products.reduce((sum, p) => {
    sum += p.price;
    return sum;
  }, 0)
);