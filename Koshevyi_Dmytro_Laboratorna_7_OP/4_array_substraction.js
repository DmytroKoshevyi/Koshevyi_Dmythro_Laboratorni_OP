'use strict'
const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const difference = (array, array_not)=> {
    let newarray=[];
    for(let i=0;i<array.length;++i){
    if(array_not.indexOf(array[i])===-1){newarray.push(array[i]);}
    }
    return newarray;
}
console.log(difference(array1,array2));