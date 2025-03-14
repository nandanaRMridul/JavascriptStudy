/* 
inputArray = [10, 7, 15, 4, 8];
outputArray= [30, 3, 7, 12, 24];
*/

input = [10, 7, 15, 4, 8]

output = []

for (num of input) {
  if (num % 2 == 0) {
    output.push(num * 3);
  }
  else {
    output.push((num - 1) / 2);
  }
}

console.log(output);
