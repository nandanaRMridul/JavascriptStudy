//Find the sum of all even numbers in an array (with filter and reduce)


const arr = [42, 7, 18, 93, 5, 66, 31, 88, 12, 25];


const sumEven = arr.filter(num => num % 2 == 0).reduce((sum, num) => sum += num, 0)

console.log(sumEven);