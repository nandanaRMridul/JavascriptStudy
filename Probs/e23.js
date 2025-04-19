//Write a function findMaxMin that takes an array of numbers as input and returns an object with two properties: max and min, representing the maximum and minimum values in the array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


findMaxMin = (arr) => {
  let max = arr.reduce((a, b) => a > b ? a : b, -Infinity)
  let min = arr.reduce((a, b) => a < b ? a : b, Infinity)
  
  return {max, min}
}

console.log(findMaxMin(numbers)); 