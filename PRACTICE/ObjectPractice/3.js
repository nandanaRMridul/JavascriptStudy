const itemList = [
  { item: "Apple", category: "Fruit" },
  { item: "Carrot", category: "Vegetable" },
  { item: "Banana", category: "Fruit" },
  { item: "Broccoli", category: "Vegetable" },
  { item: "Orange", category: "Fruit" }
];

// Create an object where the keys are the categories, and the values are arrays of items in each category.
// Expected output example: { "Fruit": ["Apple", "Banana", "Orange"], "Vegetable": ["Carrot", "Broccoli"] }
// Write the javascript code to fulfill the requirement.
let output = {};

itemList.forEach((eachItem) => {
  category = eachItem.category;
  currentItem = eachItem.item;
  items = [];

  if (category in output) {
    output[category].push(currentItem);
  }
  else {
    output[category] = [currentItem];
  }
})

console.log(output);

