// Basic Types
const id: number = 5;
const company: string = 'Traversy Media';
const isPublished: boolean = true;
let x: any = 'Hello';
x = true;
let age: number;
age = 23;
let ids: number[] = [1, 2, 3];
let arr: any[] = ['Hello', 1, false];

// Tuple
let person: [number, string, boolean] = [1, 'Emilia', true];

// Tuple Array
let employee: [number, string][];

employee = [
    [1, 'Emilia'],
    [2, 'Radek'],
    [3, 'Dawid'],
]

// Union
let pid: number | string = '1';

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// Objects
type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: 'John',
}

// Type Assertion
let cid: any = 1;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
    return x + y;
}

// Void
function log(message: string | number): void {
    console.log(message);
}

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const personOne: UserInterface = {
    id: 1,
    name: 'Emilia'
}

// Types
type Point  = number | string;
const p1: Point = 1;

// Interfaces with function
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;