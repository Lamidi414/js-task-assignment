/**
 * Find the summation of all odd numbers between 1 to 500 and print them on the console log.
 */
let sum = 0;
for(let i = 1; i <= 500; i+=2) {
    sum += i;
}
    console.log(`The summation of odd numbers from 1 to 500 is: ${sum}`);