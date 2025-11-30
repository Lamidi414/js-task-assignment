/**
 * Pay for your movie ticket
 * Imagine, the INOX charges ticket prices based on age:
 *  Children (<18 years): $3
 *  Adults (18 - 60 years): $10
 *  Seniors (60+ years): $8
 * Write a program that prints the ticket price based on the person’s age.
 */
let age = 61;
if(age < 18) {
    console.log("Child ticket: $3");
}   else if(age <= 60) {
    console.log("Adult ticket: $10");
}   else {
    console.log("Senior Adult(60+ yrs): $8");
}