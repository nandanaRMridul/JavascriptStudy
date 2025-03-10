/* W.A.P Check if a person qualifies for a loan based on:
Minimum salary of 30,000
At least 2 years of work experience
 */

//Initializing salary and workExperience variables
salary = 40000;
workExperience = 3;

//Checking if Equilateral, Isosceles or Scalene
if (salary >= 30000 && workExperience >= 2) {
  console.log("Eligible for loan");
} else if (salary < 30000 && workExperience < 2) {
  console.log("Not eligible for loan");
}else {
  console.log("Invalid entry");
}