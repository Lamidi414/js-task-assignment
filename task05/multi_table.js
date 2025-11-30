// Craete Multiplication Table (Using for loop)

/* 
    Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:
    ``` 3 x 1 = 3
        3 x 2 = 6
        ...
        3 x 10 = 30 ```
*/

let n = 3;
for(let multiply = 1; multiply <= 10; multiply++) {
    let result = n * multiply;
    console.log(`${n} x ${multiply} = ${result}`);
}