//program to swap two numbers
a = 10;
b = 20;

c = a + b;//sum of both numbers

a = c - a;//a will contain value of b since sum - a = b
b = c - b;//b will contain value of a since sum - b = a

console.log(`The value of a is ${a} and b is ${b}`);


//Output
//a = 20 
//b = 10