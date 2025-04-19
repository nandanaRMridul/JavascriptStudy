// Add 18% GST to each price using map
 

const prices = [100, 200, 300];
const gstAdded = prices.map(num => num + (num * (18 / 100)));

console.log(gstAdded);