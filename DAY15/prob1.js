/* 
const employees = [
    [1000, "John Mathew", "Developer", "Kochi", 60000, 2],
    [1001, "Rahul Das", "QA Tester", "Kochi", 50000, 2],
    [1002, "Sneha Raj", "Automation Tester", "Tvm", 55000, 3],
    [1003, "Arjun ks", "Data Engineer", "Kochi", 85000, 5],
    [1004, "Alan George", "Developer", "Kochi", 80000, 4],
    [1005, "Maya Thomas", "Developer", "Tvm", 75000, 3],
    [1006, "Abdulla ks", "DevOps Engineer", "Tvm", 80000, 4],
    [1007, "Vivek pp", "Cloud Architect", "Kochi", 95000, 6],
    [1008, "Sophia James", "Developer", "Tvm", 70000, 3],
    [1009, "Riya Paul", "System Analyst", "Tvm", 70000, 3]
];

1. print all employee name
2. print total number of employee
3. print developer employee details
4. print employee whose salary > 75000
5. print details of employee vivek pp
6. Sort employee based on their salary in descending order
7. Sort employee based on their experience in descending  order
*/

const employees = [
    [1000, "John Mathew", "Developer", "Kochi", 60000, 2],
    [1001, "Rahul Das", "QA Tester", "Kochi", 50000, 2],
    [1002, "Sneha Raj", "Automation Tester", "Tvm", 55000, 3],
    [1003, "Arjun ks", "Data Engineer", "Kochi", 85000, 5],
    [1004, "Alan George", "Developer", "Kochi", 80000, 4],
    [1005, "Maya Thomas", "Developer", "Tvm", 75000, 3],
    [1006, "Abdulla ks", "DevOps Engineer", "Tvm", 80000, 4],
    [1007, "Vivek pp", "Cloud Architect", "Kochi", 95000, 6],
    [1008, "Sophia James", "Developer", "Tvm", 70000, 3],
    [1009, "Riya Paul", "System Analyst", "Tvm", 70000, 3]
];

/* 
for (eachEmp of employees) {
  console.log(eachEmp[1]);
} */
console.log("The name of each employee:");
employees.forEach((eachEmp) => console.log(eachEmp[1]))
  
console.log("--------------------------");
console.log(employees.length);
console.log("--------------------------");


for (eachEmp of employees) {
  if (eachEmp[2] == 'Developer') {
    console.log(eachEmp);
  }
}
console.log("--------------------------");
/* for (eachEmp of employees) {
  if (eachEmp[4] > 75000) {
    console.log(eachEmp);
  }
}
 */
let filteredArr = employees.filter((emp) => (emp[4] > 75000))//return array
console.log(filteredArr);

employees.filter((emp) => (emp[4] > 75000)).forEach((a) => (console.log(a[1])));//return names of filtered employees

console.log("--------------------------");
/* for (eachEmp of employees) {
  if (eachEmp[1] == "Vivek pp") {
    console.log(eachEmp)
  }
} */

console.log(employees.find((emp) => (emp[1] == "Vivek pp"))); //find method

console.log("--------------------------");

let sortedArray1 = employees.sort((emp1, emp2) => (emp2[4] - emp1[4]))
console.log(sortedArray1)

console.log("--------------------------");

let sortedArray2 = employees.sort((emp1, emp2) => (emp2[5] - emp1[5]))
console.log(sortedArray2)

console.log("--------------------------");
//find employee with highest salary

console.log((employees.reduce((e1, e2) => (e1[4] > e2[4] ? e1 : e2))))

console.log((employees.reduce((e1, e2) => (e1[4] > e2[4] ? e1 : e2)[1]))) //print name of employee 


console.log("--------------------------");
//find employee with lowest salary
console.log((employees.reduce((e1, e2) => (e1[4] < e2[4] ? e1 : e2))))

console.log("--------------------------");
//find sum of salaries

console.log(employees.map((emp) => (emp[4])).reduce((sal1, sal2) => sal1 + sal2)); //get array of salaries, then reduce