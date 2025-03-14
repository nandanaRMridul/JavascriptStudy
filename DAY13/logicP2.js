//input = [4,5,6]
//output = [11, 10, 9]
//4 + 5 + 6 = 15 //15-4 = 11 ...

input = [4, 5, 6]
output = []
sum = 0;

for (num of input) {
 sum += num; //find sum of input terms
}

for (num of input) {
  output.push(sum - num); //subtract each term from sum to get each output term
}

console.log(output);