'use strict'
const a = 5;
const inc = (number) => {
    return number++;
    //return number;
};
const b = inc(a);
console.log(a, b);