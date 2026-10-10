'use strict'
let a = 5, b = 6;
const average = (number1, number2) => {
    return (number1 + number2) / 2;
};
console.log("Average of " + a + " " + b + " = " + average(a, b));
const square = (number) => {
    return number *number;
};
const cube = (number) => {
    return number *number*number;
};
for (let i = 0; i <= 9; i++) {
    console.log(i + " squared = " + square(i));
    console.log(i + " cubed = " + cube(i));
}