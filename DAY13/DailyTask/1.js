//input = [1, 2, 3, 4]  output = [6,12]

input = [1, 2, 3, 4]
output = []

for (num of input) {
  if (num % 2 == 0) {
    output.push(num * 3);
  }
}

console.log(output);