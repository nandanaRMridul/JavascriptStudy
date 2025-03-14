/* 
Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

Test Data:

([2,3,5,7]) -> true
([2,3,5,7,8]) -> false
 */

const checkPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++){
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

input1 = [2, 3, 5, 7];
input2 = [2,3,5,7,8];


const checkAllPrime = (arr) => {
  for (num of arr) {
    if (!checkPrime(num)) {
      return false;
    }  
  }
  return true;
}

console.log(checkAllPrime(input1));
console.log(checkAllPrime(input2));

