/* w.a.p to search a string is available in the given productArray, if present then return an array of product which includes the string, else display "product not found" */

const prompt1 = require('prompt-sync')({ signint: true });
let searchKey = prompt("Enter a word: ");
searchKey = searchKey.toLowerCase();

productArray = ["Laptop", "Tablet", "Smart Watch", "Mobile Phone"]

let output = productArray.filter((product) => {
  product.toLowerCase() == searchKey
})
output.length > 0 ? console.log(output): console.log("product not found")