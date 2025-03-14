//array =[1 4 2 6 3 8 ]
//w.a.p to check if 2 is present in the array

array = [1, 4, 2, 6, 3, 8]
let searchKey = 3;

let sortedArray = array.sort((num1, num2) => num1 - num2);
let start = 0;
let end = sortedArray.length - 1;
isFound = false;

while (start <= end) {
  mid = Math.floor((start + end) / 2);
  if (sortedArray[mid] == searchKey) {
    isFound = true;
    break;
  }
  else if (sortedArray[mid] < searchKey) { //if searchkey is > than mid change the limits to mid + 1 to end
    start = mid + 1;
  }
  else if (sortedArray[mid] > searchKey) {//if searchkey is < than mid change the limits to mid + 1 to end
    end = mid - 1;
  }
}

isFound ? console.log("Found") : console.log("Not found");


