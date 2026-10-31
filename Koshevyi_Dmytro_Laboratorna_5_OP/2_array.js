'use strict'
const array= () =>{
    let innerArray=[];
    let value = (a)=>innerArray[a];
    value.pop=()=>innerArray.pop();
    value.pop=(a)=>innerArray[0]=a;
    value.push = (a)=>innerArray.push(a);
    return value;
}
const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop(2)); 
console.log(arr.pop()); 

console.log(arr.pop()); 