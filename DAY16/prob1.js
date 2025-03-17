let arr = ["hello", "world", "!"];

//expectedresult: "helloworld!"

console.log(arr.reduce((elem1, elem2) => elem1 + elem2));

console.log("------------------------------------------------------------------------");
//expectedresult: "!worldhello"


console.log(arr.reduceRight((elem1, elem2) => elem1 + elem2));
console.log("------------------------------------------------------------------------");
console.log(arr.reduce((elem1, elem2) => elem2 + elem1)); //or