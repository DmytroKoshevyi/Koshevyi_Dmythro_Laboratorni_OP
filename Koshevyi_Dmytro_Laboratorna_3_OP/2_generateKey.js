'use strict'
let characters = ["a", "b", "c", "d", "e", "A", "B", "C", "D", "E", "1", "2", "3", "4", "@", "&", "#"];
//const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const length = 16;
const randomIndex = (maxIndex) => {
    return Math.floor(maxIndex * Math.random());//Ми не додаємо 1 для невілювання Math floor, бо максимальний індекс на 1 менше ніж length 
}
const generateKey = (length, characters) => {
    let arrayLength = characters.length;
    let key = "";
    for (let i = 0; i < length; i++) {
        key += characters[randomIndex(arrayLength)];
    }
    return key;
}
console.log(generateKey(length, characters));