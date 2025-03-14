//input = [4, 5, 6]
//output = [30, 24, 20]
input = [4, 5, 6]
output = []

product = 1;

for (num of input) {
  product *= num; 
}

for (num of input) {
  output.push(product / num); //dividing product of terms of input by each term in input 
}

console.log(output)