'use strict'
let IPv4 = "127.0.0.1";
//let IPv4 = "10.0.0.1";
let bytes = IPv4.split(".");

let result = bytes.reduce((accumulator, num) =>
    accumulator = ((accumulator) << 8) + Number(num)
    , 0);
console.log(result);
/*for(let i=0;i<bytes.length-1;i++)
    {
      bytes[i] = bytes[i]<<8;
      bytes[i+1] = bytes[i]+Number(bytes[i+1]);
    }
      console.log(bytes[3]);*/