'use strict'
let errorfunction;
const composition = (...functions) => x => {

    /*for (let i = 0; i < functions.length; i++) {
        if (typeof (functions[i]) !== "function") {
            console.log("Error: one of the arguments isn't a function.")
            return;
        }
    }*/
   try{
    functions[functions.length-1] = functions[functions.length-1](x);
    for (let i = functions.length-2; i>=0; i--) {
        functions[i] = functions[i](functions[i + 1]);
    }
    return functions[0];
    }
    catch(error){
        errorfunction(error);
        return;
    }
}
const inc = x => ++x;
const twice = x => x * 2;
const cube =x => x ** 3;
const f = composition(inc, twice, cube);
f.on = (callback) => {
    errorfunction = callback;
}
f.on( (geterror) => {
    console.log(geterror.message);
});
console.log(f(5));