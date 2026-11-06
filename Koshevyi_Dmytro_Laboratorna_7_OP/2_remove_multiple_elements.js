'use strict'
const array = [1, 2, 3, 4, 5, 6, 7];
const removeElement = (array, ...elements)=> {
    let newarray;
    for(let i=0;i<elements.length;++i){
        if(array.indexOf(elements[i])!=-1){
    newarray = array.splice(array.indexOf(elements[i]),1);
    }
    }
    return newarray;
}
removeElement(array, 5,6,7);
console.log(array);
