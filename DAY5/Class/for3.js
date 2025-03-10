/* w.a.p to find sum of n numbers */

//Initializing n, sum variables
let n = 10;
let sum = 0;//should initialize since we use sum in an expression

for (let i = 1; i <= n; i++){
  sum = sum + i;//cannot access sum without initialization
}
console.log(`Sum of ${n} numbers: ${sum}`);