/**
 **Let's calculate how much you pay for electricity bills per month and annually.
 * Create a units variable. Based on this value you will calculate the total electricity bill for a months.
 * If each day you consume the units and each unit cost 150 Rupee(₦2,434.05), how much will you be charged per month?
 * If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
 */

 let unitsPerDay = 10; // Example: 10 units consumed per day
 const costPerUnit = 2434.05; 
 const daysInMonth = 30;
 const discountRate = 0.20;
 let monthlyBill = unitsPerDay * costPerUnit * daysInMonth; // 
 let annualBill = monthlyBill * 12;
 let discountedAnnualBill = annualBill * (1 - discountRate);
 
 const formatted = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
});
console.log(`Monthly Electricity Bill: ${formatted.format(monthlyBill.toFixed(2))}`);
console.log(`Annual Electricity Bill (before discount): ${formatted.format(annualBill.toFixed(2))}`);
console.log(`Annual Electricity Bill (after 20% discount): ${formatted.format(discountedAnnualBill.toFixed(2))}`);
