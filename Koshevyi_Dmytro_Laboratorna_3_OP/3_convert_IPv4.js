'use strict'
let IPv4 = "127.0.0.1";
//let IPv4 = "10.0.0.1";
let bytes = IPv4.split(".");

let result = bytes.reduce((accumulator, num) =>
    accumulator = ((accumulator) << 8) + Number(num)
    , 0);
console.log(result);
