//frontend interview qns
console.log(
  "-----------------------------------------------------------------------------"
);

console.log("A" + 7); //A7
console.log("A" - 7); //NaN
console.log("Nandana" + 100); //Nandana100 concatenation
console.log("2" + 2 + "2"); //222
console.log(typeof ("2" + 2 + "2")); //222 string
console.log("2" + 2 - "2"); //20
console.log(typeof ("2" + 2 - "2")); //20 number

console.log(
  "-----------------------------------------------------------------------------"
);

//SLICE
let numbers = [1, 2, 3, 4, 5] //index [0,1,2,3,4]

let numbers1 = numbers.slice(1, 3); //3 excluded only 1, 2 indices taken
console.log(numbers1); //shallow copy of elements sliced out
console.log(numbers); //array not manipulated

console.log(
  "-----------------------------------------------------------------------------"
);

//SPLICE
let numbers2 = numbers.splice(1, 3); //3 excluded only 1, 2 indices taken
console.log(numbers1); //elements deleted from array
console.log(numbers); //modified array

console.log(
  "-----------------------------------------------------------------------------"
);

//Left shift operator <<
var a = 8, b = 2;
console.log(a << b); //shift binary value of a two times to left => a * 2^b => 8 * 2 ^ 2 = 32

//Right shift operator >>
var a = 8, b = 2;
console.log(a >> b); //shift binary value of a two times to right => a / 2^b => 8 / 2 ^ 2 = 2

console.log(
  "-----------------------------------------------------------------------------"
);

//isNaN

console.log(Number.isNaN(NaN)); //correct o/p since NaN is obviously NaN
console.log(Number.isNaN("string")); //correct o/p with number class
console.log(isNaN("string")); //incorrect o/p since we donr use Number class, NaN performs type coercion (changes type string -> number)

console.log(
  "-----------------------------------------------------------------------------"
);

a = true, b = false;
console.log(a && b);

console.log(
  "-----------------------------------------------------------------------------"
);

var a = 10, b = '10';

a == b ? console.log('Equal'): console.log('Not equal'); //only values are checked
a === b ? console.log('Equal') : console.log('Not equal'); //both value and type are checked

a === b && a != b ? console.log("Equal") : console.log("Not equal"); //logical and only proceeds to rhs if lhs is true

a === b || a != b ? console.log("Equal") : console.log("Not equal"); //logical or proceeds to rhs even if lhs is false and checks if true or false

console.log(
  "-----------------------------------------------------------------------------"
);

for (var i = 0; i < 5; i++){ //var is a functional scope or global, so this wont affect access so you get 6
  i++;
}

console.log(i);

for (let j = 0; j < 5; j++){ //let is a block scope or global, so this will affect access so you get 6
 j++;
}

/* console.log(j); */ //you get an error