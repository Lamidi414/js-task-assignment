/**
 *  What is the mistake in the code below?
 * ----------------------------------------
 */

  let total = 0; // Global, bad practice

  function add(num) {
    total += num;
  }

  add(5);
  add(10);
  console.log(total);