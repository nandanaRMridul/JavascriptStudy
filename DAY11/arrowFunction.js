//write a function to check if user can vote based on the age

const checkAge = (age) => {
  return age>=18?"Eligible":"Not eligible";
}

console.log(checkAge(14));