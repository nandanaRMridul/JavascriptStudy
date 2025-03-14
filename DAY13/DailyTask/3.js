//input [6 ,7 ,9]
//output [63 ,54 ,42]

input = [6, 7, 9]
output = []
pdt = 1;

for (num of input) {
  pdt *= num;
}

for (num of input) {
  output.push(pdt / num);
}

console.log(output);
