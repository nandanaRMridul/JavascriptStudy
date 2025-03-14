//input: [5, 6, 7]
//output:[10, 24, 42]

input= [5, 6, 7]
output = []
multiply = 2;

for (num of input) {
  output.push(num * multiply);
  multiply += 2;
}

console.log(output);