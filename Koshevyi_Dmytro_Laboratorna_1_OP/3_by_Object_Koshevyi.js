'use strict'
const object = { n: 5 }
const inc = (Num) => {
    Num.n++;
};
inc(object);
console.log(object);