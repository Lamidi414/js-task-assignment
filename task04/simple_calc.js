/**
 * Build a Calculator with switch-case
 * Write a simple calculator that takes an operator (+, -, , /, %) as input, 
 * and performs the operation on two numbers. 
 * Print the output on the console.
 */

let num1 = 20;
let num2 = 10;
let operator = "+";

switch(operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "%":
        console.log(num1 % num2);
        break;
    default:
        console.log("Invalid operator");
}