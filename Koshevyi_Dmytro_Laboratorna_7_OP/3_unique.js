'use strict'
const array = [2, 1, 1, 3, 2];
const unique = (array)=> {
    let newarray=[];
    for(let i=0;i<array.length;++i){
    if(newarray.indexOf(array[i])===-1){newarray.push(array[i]);}
    }
    return newarray;
}
console.log(unique(array));