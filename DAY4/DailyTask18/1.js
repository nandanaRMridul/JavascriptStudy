/* Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height). */

//Initializing weight, height variables
weight = 80;
height = 168;
//Calculating BMI for weight in kg and height in cm and multiplying by 10^4 for unit conversion
bmi = (weight / (height * height))*10000;

//Print BMI message
console.log(`Your BMI is: ${bmi}`);

//Check BMI and categorize
if (bmi < 18.5) {
  console.log(`Underweight`);
}
else if (bmi >= 18.5 && bmi < 25) {
  console.log(`Normal`);
}
else if (bmi >= 25 && bmi < 30) {
  console.log(`Overweight`);
}
else if (bmi >= 30 && bmi < 35){
  console.log(`Obesity (1st Class)`);
}
else if (bmi >= 35 && bmi < 40) {
  console.log(`Obesity (2nd Class)`);
}
else {
  console.log(`Invalid Entry`);
}
