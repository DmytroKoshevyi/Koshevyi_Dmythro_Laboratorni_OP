'use strict'
const persons = {
    Elizabeth_II: {born:1926,died:2022},
    George_VI: {born:1895,died:1952},
    Edward_VIII: {born:1894,died:1972},
    George_V: {born:1865,died:1936},
    Edward_VII:{born:1841,died:1910}
};
const calculateAge = (personsData) =>{
    let ages={};
    for (let person in personsData){
        ages[person]= personsData[person].died-personsData[person].born;
    }
    return ages;
}
console.log(calculateAge(persons));