/* w.a.p to search a string is available in the given productArray, if present then return an array of product which includes the string, else display "product not found" */

const prompt = require('prompt-sync')({ signint: true });
let searchKey = prompt("Enter a word: ");
searchKey = searchKey.toLowerCase();

productArray = ["Laptop", "Tablet", "SmartWatch", "Phone"]

let output = productArray.filter((product) => {
  return product.toLowerCase().includes(searchKey)
})
output.length > 0 ? console.log(output): console.log("product not found")