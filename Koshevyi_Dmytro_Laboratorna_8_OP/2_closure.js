'use strict'
const store = (storage) => {
    let innerfunction = () => {
        return storage;
    }
    return innerfunction;
}
const read = store(5);
const value = read();
console.log(value);