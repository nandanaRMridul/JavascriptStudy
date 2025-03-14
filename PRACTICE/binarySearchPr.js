

arr = [23, 8, 42, 15, 99, 1, 67, 33]
searchKey = 67;

//sorting the given array
sortedArr = arr.sort((num1, num2) => num1 - num2);

start = 0;
end = sortedArr.length - 1;
mid = (start + end) / 2;