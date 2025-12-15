/**
 * What will be the output of the following code and why?
 * -----------------------------------------------------
 * 
 */

 let user = "Alice";

  function outer() {
    function inner() {
      console.log(user); // Alice
    }

    let user = "Bob";
    inner(); //invoke the inner function = "Alice"
}

    outer();// Invoke the outer function = "Bob"