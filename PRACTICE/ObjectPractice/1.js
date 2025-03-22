const productOrders = [
  { product: "Widget A", quantity: 5 },
  { product: "Widget B", quantity: 10 },
  { product: "Widget A", quantity: 3 },
  { product: "Widget C", quantity: 7 },
  { product: "Widget B", quantity: 2 },
];

// Create an object that stores the total quantity for each product
// Expected output example: { "Widget A": 8, "Widget B": 12, "Widget C": 7 }
// Write the javascript code to fulfill the requirement.

output = {};

//access each pdt
productOrders.forEach((eachProduct) => {
  let name = eachProduct.product;
  let currentQuantity = eachProduct.quantity;

  if (name in output) { //after adding values to o/p, updating it as sum
     output[name] = output[name] + currentQuantity;
  }
  else {
    output[name] = currentQuantity;//adding values to obj first
  }
})

console.log(output);
