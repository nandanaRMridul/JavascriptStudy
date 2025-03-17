

let arr = [23, 8, 42, 15, 99, 1, 67, 33]
let searchKey = 67;

//sorting the given array
let sortedArr = arr.sort((num1, num2) => num1 - num2); //sortedAarr = [1, 8, 15, 23, 33, 42, 67, 99]
                                                                // 0  1  2   3   4   5   6   7
let start = 0;
let end = sortedArr.length - 1;


let isFound = false;

while (start <= end) { //important
  mid = Math.floor((start + end) / 2); //3

  if (sortedArr[mid] == searchKey) {
    isFound = true;
    break;
  }
  else if (sortedArr[mid] < searchKey) {
    start = mid + 1;
  }
  else if (sortedArr[mid] > searchKey) {
    start = mid - 1;
  }
}


isFound? console.log(`${searchKey} is found`): console.log(`${searchKey} not found`)