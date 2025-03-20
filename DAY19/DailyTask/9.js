/* 
Create an object employee with several properties:

 name: "Sarah"
 position: "Developer"
 experience: 5
 skills: ["JavaScript"]

 1 update skills to "react","node.js"
 2 Write a loop to print each property of the employee object.
 */

 //Create an object employee with several properties:
 employee = {
  name: "Sarah",
  position: "Developer",
  experience: 5,
  skills: ["JavaScript"]
}
 
//1 update skills to "react","node.js"
employee.skills = ["react", "node.js"]
 
//2 Write a loop to print each property of the employee object.
for (let key in employee) {
  console.log(employee[key]);
}