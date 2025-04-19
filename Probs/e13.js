//Write a higher-order function calculate that takes two numbers and a callback function as parameters. The callback function should perform operations like addition, subtraction, multiplication, and division on the two numbers.

const num1 = 20, num2 = 10;

const add = (a,b) => {
  return a + b;
}
const subtract = (a,b) => {
  return a - b;
}
const multiply = (a,b) => {
  return a * b;
}
const divide = (a,b) => {
  return a / b;
}

//-----higher order fn------

const calculate = (a, b, operation) => {
  console.log(operation(a, b));
}


calculate(num1, num2, divide);
