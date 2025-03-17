/* 
Given an array of numbers, display a new array containing only even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let even = numbers.filter((num) => num % 2 == 0);

console.log(even);