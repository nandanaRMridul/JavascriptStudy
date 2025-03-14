/* 
input : [ 8, 12, 18, 24 ]
output : [ 4, 6, 6 ]
 hint : gcd
*/
const findGCD = (n1, n2) => {
  let smallest = 0;
  let GCD = 1;
  n1 > n2 ? smallest = n2 : smallest = n1;
  
  for (let i = 1; i <= smallest; i++){
    if (n1 % i == 0 && n2 % i == 0) {
      GCD = i;
    }
  }
  return GCD;
}

input = [8, 12, 18, 24]
output = []


for (let i = 0; i < input.length - 1; i++) {
  output.push(findGCD(input[i], input[i + 1]));
}

console.log(output);
