/* Write a program that takes the lengths of three sides of a triangle as input and determines if the triangle is equilateral, isosceles, or scalene. */

//Initializing 3 sides of the triangle
side1 = 5; 
side2 = 5;
side3 = 7;

//Checking if Equilateral, Isosceles or Scalene
if (side1 === side2 && side2 === side3) {
  console.log("Equilateral triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("Isosceles triangle");
}else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
  console.log("Scalene triangle");
}else {
  console.log("Invalid length of sides");
}