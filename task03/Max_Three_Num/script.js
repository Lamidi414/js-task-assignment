/**
 * Find the max number from the lot.
 * ----------------------------------
 * Take three numbers and assign them to variables p, q, and r.
 * Now find the maximum of these three numbers using the comparison operators.
 */

let p = 20;
let q = 10;
let r = 35;

let maxNumber;

console.log('----- Finding the Maximum of Three Numbers -----');
console.log(`P =${p}, Q =${q}, R =${r}`);

if(p > q && p > r) {
    maxNumber = p
}
 else if(q > p && p > r) {
    maxNumber = q;
 } 
  else {
    maxNumber = r;
  }
  console.log(`The Maximum Number is: ${maxNumber}`);
  
