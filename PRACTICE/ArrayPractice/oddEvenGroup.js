//You're given a list of numbers. Group them into odd and even arrays.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* Expected Output:
{
  even: [2, 4, 6, 8],
  odd: [1, 3, 5, 7, 9]
}
*/

const grouped = numbers.reduce((acc, num) => {
  if (num % 2 == 0) {
    acc.even.push(num)
  } else {
    acc.odd.push(num)
  }
  return acc;
},{ even: [], odd: []})

console.log(grouped);