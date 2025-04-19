//You have a product list. Extract a unique list of categories.

const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Laptop", category: "Electronics" }
];

// ✅ Output: ["Clothing", "Electronics"]

const categories = products.map(pdt => pdt.category)

console.log(categories.filter((cat, index, arr) => {return arr.indexOf(cat) === index}));