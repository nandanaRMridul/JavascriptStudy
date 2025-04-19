// Get Unique Ingredients from a Menu

const menu = [
  { item: "Burger", ingredients: ["Bun", "Patty", "Cheese"] },
  { item: "Sandwich", ingredients: ["Bread", "Cheese", "Lettuce"] },
  { item: "Wrap", ingredients: ["Tortilla", "Lettuce", "Patty"] },
];


//["Bun", "Patty", "Cheese", "Bread", "Lettuce", "Tortilla"]

const ingredients = menu.map(item => item.ingredients).flat(Infinity).filter((i, index, arr) => {return arr.indexOf(i) === index })

console.log(ingredients);