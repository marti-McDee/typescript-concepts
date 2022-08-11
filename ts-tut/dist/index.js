"use strict";
let employee = {
    id: 1,
    name: 'Marti',
    retire: (date) => {
        console.info(date);
    }
};
employee.retire(new Date("2052-08-05"));
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name = 'stranger') {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log(`Hola!`);
}
greet();
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.info(customer);
//# sourceMappingURL=index.js.map