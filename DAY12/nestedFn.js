globalData = "This is global data";

const parentFunc = () => {
  parentData = "This is parent data";
  return () => {  
    childData = "This is child data";
    console.log(parentData);
    console.log(globalData);
  }
}

child = parentFunc();
child(); 

