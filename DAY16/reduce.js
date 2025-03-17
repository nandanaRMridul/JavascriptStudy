numArray = [2, 1, 3, 4, 5, 8, 6, 7];


//find largest num
let largest = numArray.reduce((e1, e2) => (e1 > e2 ? e1 : e2));

console.log(largest);

//find smallest num
let smallest = numArray.reduce((e1, e2) => (e1 < e2 ? e1 : e2));
console.log(smallest);

//find sum of all nums

let sum = numArray.reduce((sum, e) => (sum += e))

console.log(sum);