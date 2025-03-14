//Input: [2, 3, 4]
//Output: [12, 8, 6]

input= [2, 3, 4]
output = []

pdt = 1;

for (num of input) {
  pdt *= num;
}

for (num of input) {
  output.push(pdt / num);
}

console.log(output)