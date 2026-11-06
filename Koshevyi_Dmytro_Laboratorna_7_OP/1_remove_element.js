'use strict'
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
const removeElement = (array, element)=> {
    const newarray = array.splice(array.indexOf(element),1);
    return newarray;
}
removeElement(array, 'Lima'); 
removeElement(array, 'Berlin'); 
console.log(array);