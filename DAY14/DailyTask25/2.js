/* let arr = [[1, 2], [3, [4, 5]], 6];
        find the sum of all numbers.
 */

let arr = [[1, 2], [3, [4, 5]], 6];
let flatArr = arr.flat(Infinity);
let sum = 0;

for (num of flatArr) {
  sum = sum + num;
}

console.log(`The sum is: ${sum}`);
