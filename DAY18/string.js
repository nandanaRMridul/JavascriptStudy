str = "malayalam"

console.log(`length of string: ${str.length}`);

console.log(str.toUpperCase())

console.log(str.toLowerCase())

str1 = "   malayalam  "
console.log(str1.trim(str1))

console.log(str.slice(1, 5))

console.log(str.substring(0, 6))

console.log(str.slice(0, -1))//removes last elem
console.log(str.substring(0, -1))//returns nothing since nothing 
console.log(str.slice(0, -5))//removes 5 elements from end to start

str2 = "5 * 5";

console.log(eval(str2))

str3 = "language malayalam"
str4 = "languagemalayalam"

console.log(str3.split(" "))
console.log(str4.split())

console.log(str3.startsWith("lan"))
console.log(str3.endsWith("am"))
