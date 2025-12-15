
function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age);

//The answer is B, because:
/**
 * age is declared with let inside the function
 * Variables declared inside a function are function-scoped
 * Outside showAge, age does not exist
 */
