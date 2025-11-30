/**
 ** Let's calculate how much you earn from your office.
 * You get 12,300 Rupee (₦199,592.38) as your monthly salary.
 * You get a 20% bonus on your annual salary.
 * How much money do you make per annum as a CTC?
 */

let monthlySalary = 199592.38; // ₦199,592.38
let annualSalary = monthlySalary * 12; // ₦2,395,108.56
let bonus = annualSalary * 0.2;       // ₦479,021.712
let CTC = annualSalary + bonus;       // ₦2,874,130.272

// 1. Create a formatter object using local settings
const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN', // Sets the currency to Nigerian Naira
    minimumFractionDigits: 0 // Removes decimal points and zeros
});

// 2. Use the formatter to display the result
console.log(`Your Cost to Company (CTC) is: ${formatter.format(CTC)}`);