/* A school keeps student details in an object. Each student has a name, age, and grade.

Create an object named student with the following details:

Name: "Rahul"
Age: 15
Grade: "10th"
Perform the following operations:

Access and print the student's name.

Update the student's age to 16.

Add a new property school with the value "ABC High School".

Print the updated object. */

student = {
Name: "Rahul",
Age: 15,
Grade: "10th"
}

//Access and print the student's name.
console.log(student.Name);

//Update the student's age to 16.
student.Age = 16;

//Add a new property school with the value "ABC High School".
Object.assign(student, { School: "ABC High School" });

//Print the updated object.
console.log(student);