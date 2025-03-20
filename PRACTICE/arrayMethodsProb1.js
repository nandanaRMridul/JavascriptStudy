/* /*
const products = [
    ["Laptop", [1200, 50, 15]], // [price, quantity, discount%]
    ["Smartphone", [800, 100, 10]],
    ["Tablet", [300, 200, 5]],
    ["Headphones", [100, 500, 0]],
    ["Smartwatch", [250, 300, 8]]
];

You are given a nested array of product records, where each product record consists of the product name (string) and an array containing the product price, quantity in stock, and discount percentage (numbers). Your task is to perform the following operations:

    1. Use forEach to log each product's name along with its total value in stock (price * quantity).
    2. Use map to create a new array of product names with their final price after discount in the format: ["Laptop - $1140", "Smartphone - $720", ...].
    3. Use filter to get an array of products that have a quantity greater than 100.
    4. Use find to get the first product that has a price less than $200.
    5. Use reduce to calculate the total value of all products in stock combined.
    6. Use reduceRight to concatenate product names in reverse order into a single string, separated by semicolons.
    7. Use some to check if any product has a discount percentage greater than 15%.
    8. Use every to check if all products have a quantity greater than 0.
*/

const products = [
    ["Laptop", [1200, 50, 15]], // [price, quantity, discount%]
    ["Smartphone", [800, 100, 10]],
    ["Tablet", [300, 200, 5]],
    ["Headphones", [100, 500, 0]],
    ["Smartwatch", [250, 300, 8]]
];

//1. Use forEach to log each product's name along with its total value in stock (price * quantity).

console.log("------------------------------------------------------------------------");
products.forEach(product => {
    console.log(`Product: ${product[0]}, Total Stock: ${Math.round(product[1][0] * product[1][1])}`);
})

//2. Use map to create a new array of product names with their final price after discount in the format: ["Laptop - $1140", "Smartphone - $720", ...].

console.log("------------------------------------------------------------------------");
discountedPrice = products.map(product => {
    let name = product[0];
    let data = product[1];
    return `${name}  - $ ${data[0] - ((data[2]/ 100) * data[0])}`
})

console.log(discountedPrice)

//3. Use filter to get an array of products that have a quantity greater than 100.

console.log("------------------------------------------------------------------------");
greaterThan100 = products.filter(product => {
   return product[1][1] > 100 && product[1][1]
})

console.log(greaterThan100);

// 4. Use find to get the first product that has a price less than $200.

console.log("------------------------------------------------------------------------");

console.log(products.find(product => { return product[1][0] < 200 && product[1][0] }));

//5. Use reduce to calculate the total value of all products in stock combined.

console.log("------------------------------------------------------------------------");

totalValue = products.map(product => {
   return product[1][1] * product[1][2]
    
}).reduce((v1, v2) => (v1 + v2), 0)

console.log(totalValue);

//6. Use reduceRight to concatenate product names in reverse order into a single string, separated by semicolons.
console.log("------------------------------------------------------------------------");
console.log((products.map((product) => (product[0]))).reduceRight((p1, p2) => p1 + ';'+ p2));

//7. Use some to check if any product has a discount percentage greater than 15%.
console.log("------------------------------------------------------------------------");
console.log((products.map((product) => (product[0]))).reduceRight((p1, p2) => p1 + ';'+ p2));