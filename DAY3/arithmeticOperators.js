//Arithmetic Operators

//Addition

//declaration
a = 5
b = 2;

//operation and assigning the result to a new variable

sum = a + b;
sub = a - b;
pdt = a * b;
div = a / b;
mod = a % b;
exp = a ** b;

// log the output

console.log(`The total sum of adding ${a} and ${b} is`, sum);
console.log(`The difference of subtracting ${a} and ${b} is`, sub);
console.log(`The product of multiplying ${a} and ${b} is`, pdt);
console.log(`The result of dividing ${a} and ${b} is`, div);
console.log(`The result of taking modulus ${a} and ${b} is`, mod);
console.log(`The result of a raised to b`, exp);


// to get last digit
num = 12345;
last = num % 10;

console.log(`The last digit is`, last);

//increment and decrement
console.log(a++);//added but not printed post increment
console.log(++a);//added and printed pre increment

//increment and decrement
console.log(--b);
console.log(b--);
console.log(b)

//assignment operators
x = 1;
y = 2;

console.log(`x += y is`, x += y);
console.log(`x -= y is`, x -= y);
console.log(`x *= y is`, x *= y);
console.log(`x /= y is`, x /= y);
console.log(`x %= y is`, x %= y);
console.log(`x **= x is`, x **= x);
