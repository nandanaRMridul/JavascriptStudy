//: Find the highest number that is divisible by 3.
arr = [10, 27, 35, 18, 22, 60, 42]

const highest = arr.reduce((large,num) => {
  if (num % 3 == 0 && num > large) {
    large = num;
  }
  return large;
}, -Infinity)// It ensures that ANY number in the array divisible by 3 will be greater than -Infinity, even if it's the smallest number ever

console.log(highest);