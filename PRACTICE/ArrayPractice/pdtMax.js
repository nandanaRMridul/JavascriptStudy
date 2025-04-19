//Return the product of all numbers except the maximum number.
const arr = [3, 5, 2, 8, 7]

let pdt = 1;

let maxNum = arr[0];



  arr.reduce((max,num) => {
    if (num > maxNum) {
      maxNum = num;
    }
    return maxNum;
  })

totalPdt = arr.reduce((pdt, num) => {
  if (num !== maxNum) {
    pdt *= num;
  }
  return pdt
})

console.log(totalPdt);