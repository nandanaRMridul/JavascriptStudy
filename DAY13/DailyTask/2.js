//Input: [5, 10, 3, 8]
//Output: [6, 5, 4, 4]

input = [5, 10, 3, 8]
output = []


for (num of input) {
  if (num % 2 == 0) {
    output.push(num / 2);
  }
  else {
    output.push(num + 1);
  }
}

console.log(output);
