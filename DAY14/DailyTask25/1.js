/* let arr = [1, [2, [3, 4]], [5, 6]];
     return only even numbers.
 */

let arr = [1, [2, [3, 4]], [5, 6]];

let flatArr = arr.flat(Infinity);

for (num of flatArr) {
  if (num % 2 == 0) {
    console.log(num);
  }
}