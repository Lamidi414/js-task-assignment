/**
   Skipping Multiples of 3
   ------------------------
 * Write a program to print numbers from 1 to 20, but skip multiples of 3.
 */

for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0) {
        continue; // Skip multiples of 3
    } 
    console.log(i);
}