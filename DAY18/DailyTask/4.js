/* 
Check if All Elements in an Array are Unique
 */

arr = [2, 8, 1, 5, 9, 2, 6, 3, 8, 0];

let isUnique = arr.every((num1, index1) => {
  return arr.some((num2, index2) => {
    return index1 !== index2 && num1 === num2;
  }) !== true;
});

console.log(isUnique);

