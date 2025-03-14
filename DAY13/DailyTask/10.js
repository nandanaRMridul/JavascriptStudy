/* 
Input: [4, 6, 8]
Output: [32, 24, 16]
*/

input = [4, 6, 8]
output = [];
multiply = 2 ** 3;

for (i = 0; i <= input.length - 1; i++){
  output.push(input[i] * multiply);
  multiply /= 2;
}

console.log(output);
