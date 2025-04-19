//Get Unique Colors From Products
const products = [
  { name: "Shirt", color: "Red" },
  { name: "Pants", color: "Blue" },
  { name: "Hat", color: "Red" },
  { name: "Shoes", color: "Black" },
];


const colors = products.map(p => p.color) 

const uniqColors = colors.filter((p, index, arr) => {
  return arr.indexOf(p) === index;
})

console.log(uniqColors);