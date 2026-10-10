'use strict'
//ex 7
const fn = () => {
    const object1 = { name: "Euclid" };
    let object2 = { name: "Euclid" };
    object1.name = "Pythagoras";
    object2.name = "Pythagoras";
    //object1={name:"Archimedes"};//Рядок коду видає помилку, бо не може перепризначити константне значення
    object2 = { name: "Archimedes" };
    console.log(object1.name);
    console.log(object2.name);
};
fn();

//ex 8
const createUser = (name, city) => {
    return { name: name, city: city };
};
console.log(createUser("Napoleon", "Ajaccio"));