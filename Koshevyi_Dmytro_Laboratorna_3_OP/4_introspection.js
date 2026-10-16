'use strict'
const iface = () => ({
    key1: names => [names],
    key2: age => [month / 12],
    key3: (a, b, c, d) => {
        return [a, b, c, d]
    },
    key4: (a, b, c) => {
        return [a, b, c]
    },
    key5: () => {
        return
    },
    key6: 5
});
let result = [];
for (let variable in iface()) {
    if (typeof iface()[variable] === "function") {
        let size = iface()[variable].length;
        let keyname = iface()[variable].name;
        result.push([keyname, size]);
    }
}
console.log(result);
