//Double all even numbers in an array
const nums = [1, 2, 3, 4];
// Expected: [4, 8]


console.log(nums.filter(num => {
  return num % 2 == 0;
}).map(num => num * 2));



console.log('------------------------------');


//Sum prices from a cart
const cart = [{item: "Pen", price: 10}, {item: "Book", price: 50}];
// Expected: 60

totalPrice = cart.reduce((acc, item) => {
  return acc += item.price;
}, 0);


console.log(totalPrice);


console.log("------------------------------");