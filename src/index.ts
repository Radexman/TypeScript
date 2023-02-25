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
 

function greeter(person: Person) {
    return `Hello, my name is ${person.firstName} ${person.lastName} and I'm ${person.age}. My hobbies are ${person.hobbies[0]} ${person.hobbies[1]} and ${person.hobbies[2]}`;
} 

const user: Person = {
    firstName: 'Radek',
    lastName: 'Siek',
    age: 23,
    isMarried: false,
    hobbies: ['fishig', 'hiking', 'guitar'],
}

document.body.textContent = greeter(user);