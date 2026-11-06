'use strict'
const obj = { a: 1, b: 2, c: 3 };
let iterate = (object, callback) => {
    if (typeof (object) === "object") {
        for (let key in object) {
            callback(key, object[key]);
        }
    }
    else {
        console.log("Not an object");
    }
}
iterate(obj, (key, value) => {
    console.log({ key, value });
});
