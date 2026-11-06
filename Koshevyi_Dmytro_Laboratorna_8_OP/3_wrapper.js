'use strict'
const contract = (callback, ...types) => (...args) => {
    for (let i = 1; i < types.length - 1; ++i) {
        try {
            if (typeof args[i] != types[i].name.toLowerCase() && typeof args[i - 1] != types[i - 1].name.toLowerCase()) {
                throw new Error("Помилкове використання недопустимих типів");
            }
            else {
                args[i] = callback(args[i - 1], args[i]);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
    try {
        if (typeof args[args.length - 1] != types[types.length - 1].name.toLowerCase()) {
            throw new Error("Помилкове використання недопустимих типів");
        }
        return args[args.length - 1];
    }
    catch (error) {
        console.log(error.message);
    }
}
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);