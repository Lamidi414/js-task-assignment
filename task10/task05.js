// Write a function that tries to access a variable declared inside another function.

function outerFunction() {
  let secret = "I am inside outerFunction";
}

function innerFunction() {
  console.log(secret); // ❌ Error: secret is not defined
}

outerFunction();
innerFunction();
