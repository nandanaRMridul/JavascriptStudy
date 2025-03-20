/* 
Count the repeating elements in an array
Array=[1,4,9,4,7,4,8,6,5,4]
 */
arr = [1, 4, 9, 4, 7, 7, 7, 4, 8, 8, 6, 5, 4];
repeat = []

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (count > 1 && repeat.some(output => output.startsWith(`Element repeated: ${arr[i]},`)) !== true) {
    repeat.push(`Element repeated: ${arr[i]}, Count: ${count}`);
  }
}

console.log(repeat);

