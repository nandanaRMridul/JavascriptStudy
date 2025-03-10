


function greet(callBackFn) {
  callBackFn();
}

function a() {
  console.log("Hello World");
}

greet(a); //a is passed as arg so a is the callBackfn here


/*we can add multiple args along with callback
function greet(name, callBackFn) {
  callBackFn();
  console.log(name);
}

function a() {
  console.log("Hello");
}

greet(Nandana, a);
*/