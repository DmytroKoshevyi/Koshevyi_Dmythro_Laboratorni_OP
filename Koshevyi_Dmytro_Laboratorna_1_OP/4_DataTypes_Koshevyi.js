'use strict'
const array = [true, 'hello', 5, 12, -200, false, false, 'word', undefined, Infinity, 421, 5.412, 'a', null, 'Roma', true, false, 'hello', 0];
let hash = { number: 0, string: 0, boolean: 0 }
for (const element of array) {
    const elementType = typeof (element);
    if (typeof (hash[elementType]) === 'number') { hash[elementType]++; }
    else { hash[elementType] = 1 }
}
console.log(hash);