//find all first occuring student names, no dupes

const students = ["Aman", "Riya", "Aman", "Jay", "Riya", "Meera"];

const unique = students.filter((student, index, arr) => {
  return arr.indexOf(student) === index;
})

console.log(unique);