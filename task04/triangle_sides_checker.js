/**
 * A triangle has 3 sides. A Triangle type is determined by its sides:
 *  All sides equal is called, Equilateral Triangle.
 *  Two sides equal is called, Isosceles Triangle.
 *  All sides different is called, Scalene Triangle.
 * 
 *  Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.
 */
let side1 = 5;
let side2 = 5;
let side3 = 8;

switch (true) {
    case (side1 === side2 && side2 === side3):
        console.log("Triangle Type: Equilateral Triangle");
        break;
    case (side1 === side2 || side2 === side3 || side1 === side3):
        console.log("Triangle Type: Isosceles Triangle");
        break;
    default:
        console.log("Triangle Type: Scalene Triangle");
}