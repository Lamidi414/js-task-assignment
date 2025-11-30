// What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

/**ANSWER:
 * The output is: "It's a normal day because the variable day has the string 'Monday', and the case is checking for the string 'monday' which has not been assigned"
 * It will return the default block, because 'Monday' !== 'monday' 
 */