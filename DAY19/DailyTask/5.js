//Create an object named Student with name, class, division and student id of your choice and do the following:
student = {
  Name: "Emily",
  Class: 10,
  Division: "C",
  StudentId: 201254
}
//display student name and student id
console.log(`Name: ${student.Name}, StudentId: ${student.StudentId}`);

//add address for the student as "101 - Bangalore City"
Object.assign(student, { Address: "101 - Bangalore City" })

//change the division to "B",
student.Division = "B";

//check if class is present. if present, display its value
"Class" in student && console.log(student.Class);

//add school name to "DBS Central School"
Object.assign(student, { SchoolName: "DBS Central School" })
 