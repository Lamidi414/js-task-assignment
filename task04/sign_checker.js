/**
 * Horoscope Sign Checker
 * Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month
 * Make it month bases, not date based. Like March and April borns are Aries, Aplil 
 * and May born are Taurus, and so on. Do not use if-else.
 */

let month = "December";
switch(month) {
    case "March":
    case "April":
        console.log("Zodiac Sign: Aries");
        break;
    case "April":
    case "May":
        console.log("Zodiac Sign: Taurus");
        break;
    case "May":
    case "June":
        console.log("Zodiac Sign: Gemini");
        break;
    case "June":
    case "July":
        console.log("Zodiac Sign: Cancer");
        break;
    case "July":
    case "August":
        console.log("Zodiac Sign: Leo");  
        break;
    case "August":
    case "September":
        console.log("Zodiac Sign: Virgo");
        break;
    case "September":
    case "October":
        console.log("Zodiac Sign: Libra");
        break;
    case "October":
    case "November":
        console.log("Zodiac Sign: Scorpio");
        break;
    case "November":
    case "December":
        console.log("Zodiac Sign: Sagittarius");
        break;
    case "December":
    case "January":
        console.log("Zodiac Sign: Capricorn");  
        break;
    case "January":
    case "February":
        console.log("Zodiac Sign: Aquarius");
        break;
    case "February":
    case "March":
        console.log("Zodiac Sign: Pisces");
        break;
    default:
        console.log("Invalid month");
}