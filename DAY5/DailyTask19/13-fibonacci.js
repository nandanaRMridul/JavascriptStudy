/* WAP to print the Fibonacci Sequence up to N Terms using for Loop */

//initializing variables
let n = 10;
let firstTerm = 0;
let secondTerm = 1;

if (n >= 1) {
  console.log(firstTerm); //print the first term
}
if (n >= 2) {
  console.log(secondTerm); //print the second term
}

for (let i = 3; i <= n; i++) {//i from 3 since 1, 2 already handled
  let nextTerm = firstTerm + secondTerm; //calculating nextTerm based on fibonacci seq
  console.log(nextTerm);

  firstTerm = secondTerm; //updating new firstTerm and secondTerm for next iteration
  secondTerm = nextTerm;
}