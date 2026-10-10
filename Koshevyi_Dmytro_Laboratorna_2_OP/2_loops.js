'use strict'
const begin = 15, end = 30;
const range = (begin, end) => {
    let answer = [];
    for (let i = 0; i <= end - begin; i++) {
        answer[i] = i + begin;
    }
    return answer;
};
console.log(range(begin, end));
const rangeodd = (begin, end) => {
    let answer = [];
    if(begin%2){
    for (let i = 0; i <= end - begin; i +=2) {
        answer[i / 2] = i + begin;
    }
    return answer;
    }
    else{
    for (let i = 0; i <= end - begin-1; i +=2) {
        answer[i / 2] = i + begin+1
    }
    return answer;
    }
};
console.log(rangeodd(begin, end));
