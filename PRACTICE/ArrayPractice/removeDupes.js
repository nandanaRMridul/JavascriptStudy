//Write a function that removes duplicates from an array.
//Input: [1, 2, 2, 3, 4, 4, 5]
//Output: [1, 2, 3, 4, 5]

input = [1, 2, 2, 3, 4, 4, 5];

const removeDupesFilter= ((arr) => {
  return arr.filter((value, index) => arr.indexOf(value) === index) 
});

/* Step 1: Understanding .filter()
The .filter() method iterates over each element in the array.It keeps only the elements that return true in the provided function.

Step 2: Understanding indexOf(value)
arr.indexOf(value) finds the first occurrence index of value in arr.
index is the current position of the value in the array.

Step 3: The Condition arr.indexOf(value) === index
This checks if the first occurrence of value is at the current index.

If indexOf(value) === index, it means this is the first time we are encountering value, so we keep it.
If indexOf(value) !== index, it means value has appeared before, so we remove it. */

const removeDupesReduce = ((arr) => {
  return arr.reduce((unique, elem) => {
    if (unique.includes(elem) != true) {
      unique.push(elem);
    }
    return unique;
  }, [])
})

/* 

.reduce() starts with an empty array (unique).
elem is the current value in the loop.

unique.includes(elem) != true
If elem is not already in unique, we add it using .push().
If elem is a duplicate, we skip it.

unique is returned at the end, giving us an array without duplicates.

*/

console.log(removeDupesFilter(input));
console.log(removeDupesReduce(input));