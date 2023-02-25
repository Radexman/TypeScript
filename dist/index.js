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
function greeter(person) {
    return `Hello, my name is ${person.firstName} ${person.lastName} and I'm ${person.age}. My hobbies are ${person.hobbies[0]} ${person.hobbies[1]} and ${person.hobbies[2]}`;
}
const user = {
    firstName: 'Radek',
    lastName: 'Siek',
    age: 23,
    isMarried: false,
    hobbies: ['fishig', 'hiking', 'guitar'],
};
document.body.textContent = greeter(user);
