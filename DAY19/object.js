

employees = {
  empId : 1256,
  empName: "Anoop",
  empDesig: "Full Stack Developer",
  empSal: 50000
}

console.log(employees);
console.log(typeof employees);
console.log(employees["empName"]);
console.log(employees.empSal);
console.log("empId" in employees);
console.log("emp" in employees);
console.log(employees.hasOwnProperty("empName"));

employees["empAddress"] = "wfeefd";

Object.assign(employees, { empExp: "3" });

employees.empSal += 5000;



console.log(Object.keys(employees));
console.log(Object.values(employees));
console.log(Object.entries(employees));

delete employees.empSal

console.log(employees);

for (let key in employees) {
  console.log(employees[key]);
}
