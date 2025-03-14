//Input: [1, 2, 3, 4, 5]
//Output: [1, 3, 6, 10, 15]

input = [1, 2, 3, 4, 5];
output = [];
add = 0;

for (i = 0; i <= input.length-1; i++) {
  output.push(input[i] + add)
  add += input[i];
}

console.log(output);