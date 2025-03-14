/* 
Input: [1, 2, 3, 4, 5]   output: [ 1, 3, 5, 7, 9 ]
 */

input = [1, 2, 3, 4, 5]
output = []

for (num of input) {
  output.push(num * 2 - 1);
}

console.log(output);
