// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, 'Hello', null];

// Tuple
let array: [number, string, boolean] = [10, 'Emily', false];

interface Person {
    firstName: string,
    lastName: string,
    age: number,
    isMarried: boolean,
    hobbies: string[],
}

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

const user: Person = {
    firstName: 'Radek',
    lastName: 'Siek',
    age: 23,
    isMarried: false,
    hobbies: ['fishig', 'hiking', 'guitar'],
}

function hello(person: string, date: Date) {
    console.log(`Hi, ${person}! It's ${date.toDateString()}`);
}

hello('Emilia', new Date());

function greet(name: string) {
  console.log(`Hello, my name is ${name.charAt(0).toUpperCase() + name.slice(1)}`)
}

greet('emilia');

function getFavoriteNumber(): number {
  return 26;
}

const names: string[] = ['Alice', 'Bob', 'Ann'];

names.forEach(function (s) {
  console.log(s.toUpperCase());
})

names.forEach((s) => {
  console.log(s.toLowerCase());
})

interface Human {
  firstName: string,
  lastName: string,
  age: number,
}

const radek: Human = {
  firstName: 'Radosław',
  lastName: 'Siek',
  age: 23
}

const { firstName: name, lastName: surname, age } = radek;
const msg = `Hi! My name is ${name} ${surname} and I'm ${age}`;
console.log(msg);

function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(`Your ID is: ${id.charAt(0).toUpperCase() + id.slice(1)}`);
  } else {
    console.log(`Your ID is: ${id}`);
  }
}

printId('five');