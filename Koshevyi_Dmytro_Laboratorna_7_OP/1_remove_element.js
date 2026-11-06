'use strict'
const array = ['Kiev', 'Beijing', 'Lima', 'London'];
const removeElement = (array, element) => {
    if (array.indexOf(element) != -1) {
        const newarray = array.splice(array.indexOf(element), 1);
        return newarray;
    }
    return;
}
removeElement(array, 'Lima');
removeElement(array, 'Berlin');
console.log(array);
