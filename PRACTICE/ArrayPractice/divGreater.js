//Find the average of all numbers that are divisible by 3 and greater than 20 (Use filter() and reduce() — and don’t forget to calculate the average!)

const arr = [42, 7, 18, 93, 5, 66, 31, 88, 12, 25];


const divArr = arr.filter(num => (num % 3 == 0 && num > 20))

console.log(divArr);

const avg = (divArr.reduce((sum, num) => sum += num, 0)) / divArr.length;

console.log(avg);