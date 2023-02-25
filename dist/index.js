"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'Hello', null];
// Tuple
let array = [10, 'Emily', false];
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
const user = {
    firstName: 'Radek',
    lastName: 'Siek',
    age: 23,
    isMarried: false,
    hobbies: ['fishig', 'hiking', 'guitar'],
};
function hello(person, date) {
    console.log(`Hi, ${person}! It's ${date.toDateString()}`);
}
hello('Emilia', new Date());
function greet(name) {
    console.log(`Hello, my name is ${name.charAt(0).toUpperCase() + name.slice(1)}`);
}
greet('emilia');
function getFavoriteNumber() {
    return 26;
}
const names = ['Alice', 'Bob', 'Ann'];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach((s) => {
    console.log(s.toLowerCase());
});
const radek = {
    firstName: 'Radosław',
    lastName: 'Siek',
    age: 23
};
const { firstName: name, lastName: surname, age } = radek;
const msg = `Hi! My name is ${name} ${surname} and I'm ${age}`;
console.log(msg);
function printId(id) {
    if (typeof id === 'string') {
        console.log(`Your ID is: ${id.charAt(0).toUpperCase() + id.slice(1)}`);
    }
    else {
        console.log(`Your ID is: ${id}`);
    }
}
printId('five');
