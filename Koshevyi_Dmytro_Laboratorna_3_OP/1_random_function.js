'use strict'
let min, max;
const random = (min, max) => {
    if (typeof (max) != "number") {
        if (typeof (min) != "number") { return "Bounds aren't specified."; }
        else {
            max = min; min = 0;
            if (max < 0) { return "Can't work with negatives as max bound." }
        }
    }
    if (max < min) { let swapVariable = min; min = max; max = swapVariable; }
    const difference = max - min + 1;
    let result = Math.floor(min + difference * Math.random());
    return result;
};
console.log(random(7));
console.log(random(2,10));
console.log(random(4, -5));