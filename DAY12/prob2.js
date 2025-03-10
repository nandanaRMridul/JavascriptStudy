numbers = [1, 5, 6, 3, 6, 22, 66, 32, 55]

//find 22
flag = 0;
searchKey = 100;
isFound = false
for (num of numbers) {
  if (num == searchKey)
  {
    isFound = true;
    break;
  }
}

if (isFound) {
  console.log("Element is found");
}
else {
  console.log("Element is not found");
}
