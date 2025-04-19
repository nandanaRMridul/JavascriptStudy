//You're given a list of students with their names and grades. Group them by grade.
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
  { name: "Eve", grade: "B" }
];

/* Expected Output:
{
  A: ["Alice", "Charlie"],
  B: ["Bob", "Eve"],
  C: ["David"]
}
*/


const grouped = students.reduce((acc, student) => {
  if (!acc[student.grade]) {
    acc[student.grade] = []
  } 
  acc[student.grade].push(student.name);
  return acc;
}, {})

console.log(grouped);