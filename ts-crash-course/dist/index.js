"use strict";
let id = 5;
let company = 'Geffen Records';
let isPublished = true;
let x = 'Hello';
x = 30;
let ids = [1, 2, 3, 4, 5,];
let person = [23, 'David', false];
let employee;
employee = [
    [1, 'Hank'],
    [2, 'Walt'],
    [3, 'Marie']
];
let pid = 'hi';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'David'
};
const uid = user.id = 4;
let cid = '1';
let cxid = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
}
log(3);
const user1 = {
    id: 1,
    name: 'David'
};
const add = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const david = new Person(1, 'David');
const jack = new Person(3, 'Jack');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, 'Adam', 'Musician');
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jill']);
numArray.push(0);
strArray.push('jack');
class App {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
class Developer {
    static develop(app) {
        return `developing ${app.name} for ${app.type}`;
    }
}
const app = new App('whatsapp', 'mobile');
console.log(Developer.develop(app));
