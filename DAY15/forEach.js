numArray = [20, 30, 40, 50]

//print each item in the array one by one
numArray.forEach((num, index) => console.log(`Index: ${index}, Value: ${num}` )); //returns undefined

console.log("-------------------------")
// print squares of each in array
numArray.forEach((num) => console.log(num ** 2));