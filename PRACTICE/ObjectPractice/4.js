const studentGrades = [
  { student: "Alice", subject: "Math", grade: 90 },
  { student: "Bob", subject: "Science", grade: 85 },
  { student: "Alice", subject: "Science", grade: 92 },
  { student: "Bob", subject: "Math", grade: 78 },
  { student: "Charlie", subject: "Math", grade: 95 },
  { student: "Charlie", subject: "Science", grade: 88 },
];

// Create an object where the keys are the subjects, and the values are the average grades for each subject.
let output = {};

studentGrades.forEach((eachStudent) => {
  let subjects = eachStudent.subject;
  let currentGrade = eachStudent.grade;

  if (subjects in output) {
    
  }
  else {
    output[subjects] = currentGrade;
  }

})


// Expected output example: { "Math": 87.66666666666667, "Science": 88.33333333333333 }
// Write the javascript code to fulfill the requirement.
