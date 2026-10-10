'use strict'
//ex 9
const phoneCollection = [
    { name: "Charles III", phoneNumber: "+380935285392" },
    { name: "Elizabeth II", phoneNumber: "+380933829953" },
    { name: "George VI", phoneNumber: "+380935829542" },
    { name: "Edward VIII", phoneNumber: "+380932228502" },
    { name: "George V", phoneNumber: "+380931402543" }
];
const name = "Elizabeth II";
const findPhoneByName = (name) => {
    for (let user of phoneCollection) {
        if (user.name === name) { return user.phoneNumber; }
    }
    return ("error: user not found");
};
console.log(name + "'s phone is = " + findPhoneByName(name));
//ex 10
const hashPhoneCollection = {
    Charles_III: "+380935285392",
    Elizabeth_II: "+380933829953",
    George_VI: "+380935829542",
    Edward_VIII: "+380932228502",
    George_V: "+380931402543"
};
const hashName = "Charles_III";
const hashFindPhoneByName = (name) => {
    if (hashPhoneCollection[name] === undefined) { return ("error: user not found"); }
    return hashPhoneCollection[name];
};
console.log(hashName + "'s phone is = " + hashFindPhoneByName(hashName));