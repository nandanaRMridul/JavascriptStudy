//Filter out scores greater than or equal to 75:

const scores = [88, 45, 92, 67, 75, 59];
// Expected Output: [88, 92, 75]


const passed = scores.filter(num => num >= 75)

console.log(passed);