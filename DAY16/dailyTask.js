/* const students = [
  ["Alice", [85, 90, 78]],
  ["Bob", [70, 88, 95]],
  ["Charlie", [60, 75, 85]],
  ["David", [92, 88, 96]],
  ["Eve", [55, 65, 50]]
];

You are given a nested array of student records, where each student’s record consists of their name (string) and an array of their scores (numbers). Your task is to perform the following operations using the discussed array methods:

  1.	Use forEach to log each student’s name along with their average score.
	2.	Use map to create a new array of student names with their highest score in the format: ["Alice - 90", "Bob - 95", ...].
	3.	Use filter to get an array of students who have an average score greater than 80.
	4.	Use find to get the first student who has a score below 60.
	5.	Use reduce to calculate the total sum of all students’ scores combined.
	6.	Use reduceRight to concatenate student names in reverse order into a single string, separated by commas.
	7.	Use some to check if any student has a perfect score of 100.
	8.	Use every to check if all students have at least one score above 50. */


  const students = [
  ["Alice", [85, 90, 78]],
  ["Bob", [70, 88, 95]],
  ["Charlie", [60, 75, 85]],
  ["David", [92, 88, 96]],
  ["Eve", [55, 65, 50]]
];

   

//1.	Use forEach to log each student’s name along with their average score.
console.log("------------------------------------------------------------------------");
students.forEach(student => {
  let name = student[0];
  let marks = student[1];
  let avg = marks.reduce((m1, m2) => m1 + m2, 0) / marks.length;
  console.log(`Name: ${name}, Average Marks: ${avg.toFixed(2)}`);
})
console.log("------------------------------------------------------------------------");

//2.	Use map to create a new array of student names with their highest score in the format: ["Alice - 90", "Bob - 95", ...].

highestScores = students.map((student) => {
  let name = student[0];
  let marks = student[1];
  let highest = marks.reduce((m1, m2) => m1 > m2 ? m1 : m2);
  let string = `${name} - ${highest}`;
  return string;
})
console.log(highestScores);
console.log("------------------------------------------------------------------------");

//3.	Use filter to get an array of students who have an average score greater than 80.

moreThan80 = students.filter((student) => {
  let marks = student[1];
  let avg = marks.reduce((m1, m2) => m1 + m2) / marks.length;
  if (avg > 80) {
    return avg;
  } 
})

console.log(moreThan80);
console.log("------------------------------------------------------------------------");

//	4.	Use find to get the first student who has a score below 60.

scoreBelow60 = students.find((student) => {
  let name = student[0];
  let marks = student[1];
  return marks.some((m) => m < 60);
})

console.log(scoreBelow60);
console.log("------------------------------------------------------------------------");

//5.	Use reduce to calculate the total sum of all students’ scores combined.

summedMarks = students.map((student) => {
  let marks = student[1]; 
  return marks.reduce((m1, m2) => m1 + m2);
})

console.log(`Total sum: ${summedMarks.reduce((m1, m2) => m1 + m2)}`);

console.log("------------------------------------------------------------------------");

//6.	Use reduceRight to concatenate student names in reverse order into a single string, separated by commas.

let names = students.map((student) => student[0]);
console.log(names.reduceRight((n1, n2) => n1 +","+ n2));
console.log("------------------------------------------------------------------------");

//7.	Use some to check if any student has a perfect score of 100.
console.log(students.some((student) => {
  let marks = student[1];
  return marks.some((m) => m == 100);
}));
console.log("------------------------------------------------------------------------");
//8.	Use every to check if all students have at least one score above 50.
console.log(students.every((student) => {
  let marks = student[1];
  return marks.some((m) => m > 50);
}));
console.log("------------------------------------------------------------------------");