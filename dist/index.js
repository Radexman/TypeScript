"use strict";
// Basic Types
const id = 5;
const company = 'Traversy Media';
const isPublished = true;
let x = 'Hello';
x = true;
let age;
age = 23;
let ids = [1, 2, 3];
let arr = ['Hello', 1, false];
// Tuple
let person = [1, 'Emilia', true];
// Tuple Array
let employee;
employee = [
    [1, 'Emilia'],
    [2, 'Radek'],
    [3, 'Dawid'],
];
// Union
let pid = '1';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const personOne = {
    id: 1,
    name: 'Emilia'
};
const p1 = 1;
const add = (x, y) => x + y;
