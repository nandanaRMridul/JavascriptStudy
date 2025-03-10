/* w.a.p to print multiplication table to 10 of a number n*/

let n = 2;
let mul = 0;//even if not initialized it still works

for (let i = 1; i <= 10; i++){
  mul = n * i;//this itself is declaration and initialization
  console.log(`${ i } x ${ n } = ${mul}`);
}