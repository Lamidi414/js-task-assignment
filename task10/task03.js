//  Create a function with a nested function and log a variable from the parent function.

function firstNest(){

  function secondNest(){
    let msg = "Nested message"
    console.log(msg);
  
  }
  secondNest();
}
firstNest();