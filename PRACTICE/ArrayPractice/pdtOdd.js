//Find the product of all odd numbers greater than 10 in the array (Use filter() and reduce())

const arr = [42, 7, 18, 93, 5, 66, 31, 88, 12, 25];

let oddArr = arr.filter((num) => (num > 10 && num % 2 != 0));

console.log(oddArr.reduce((pdt, num) => pdt *= num, 1));