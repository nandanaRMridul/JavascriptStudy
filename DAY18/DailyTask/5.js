/* 
Find the Second Largest Number in an Array
 */

arr = [1, 4, 9, 4, 7, 4, 8, 6, 5, 4];

sorted = arr.sort((n1, n2) => n2 - n1)

console.log(`Second largest : ${sorted[2]}`);