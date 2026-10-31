'use strict'
const pipe = (...functions) => x => {

    for (let i = 0; i < functions.length; i++) {
        if (typeof (functions[i]) !== "function") {
            console.log("Error: one of the arguments isn't a function.")
            return;
        }
    }
    functions[1] = functions[1](functions[0](x));
    for (let i = 2; i < functions.length; i++) {
        functions[i] = functions[i](functions[i - 1]);
    }
    return functions[functions.length - 1];
}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
console.log(pipe(inc, twice, cube)(5));
