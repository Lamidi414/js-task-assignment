/**
 * Reverse Digits of a Number (Using while loop)
 *----------------------------------------------
 Write a program to reverse the digits of a given number using a while loop.
    Example:
    Input: 6789
    Output: 9876
 */

let number = 6789; 
let reversedNumber = 0;

while (number > 0) {   
    let digit = number % 10; // Get the last digit
    reversedNumber = (reversedNumber * 10) + digit;
    number = Math.floor(number / 10); // Remove the last digit
}
console.log(`Reversed Number: ${reversedNumber}`);