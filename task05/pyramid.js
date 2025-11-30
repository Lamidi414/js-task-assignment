// Generate a Pyramid Pattern using Nested Loop as it is shown below:

        /*
        *
        * *
        * * *
        * * * *
        * * * * *
        */
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern.trim());
} 