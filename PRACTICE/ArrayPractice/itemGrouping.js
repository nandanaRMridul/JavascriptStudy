//You're given a list of items in an inventory. Each item has a category and a name. Return an object where the keys are categories, and the values are arrays of item names under that category.


const inventory = [
  { name: "T-shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Laptop", category: "electronics" },
  { name: "Headphones", category: "electronics" },
  { name: "Coffee Mug", category: "kitchen" }
];

/* Expected Output:
{
  clothing: ["T-shirt", "Jeans"],
  electronics: ["Laptop", "Headphones"],
  kitchen: ["Coffee Mug"]
}
*/

const grouped = inventory.reduce((acc, item) => {
  if (!acc[item.category]) {
acc[item.category] = []
  }
  acc[item.category].push(item.name); 
  return acc;
}, {})

console.log(grouped);