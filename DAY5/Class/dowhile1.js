//w.a.p to print the sum of n natural numbers using do while
let n = 10;
let i = 1;
let sum = 0;

do {
  sum = sum + i;
  i++;
} while (i <= n);

console.log(`Sum: ${sum}`);