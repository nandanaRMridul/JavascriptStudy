//Sort the numbers in descending order:
const nums = [10, 5, 20, 8];
// Expected: [20, 10, 8, 5]


const sorted = nums.sort((n1, n2) => n2 - n1);

console.log(sorted);