// #Primitive Data Types in JavaScript

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const ids= Symbol('123');
const anotherIds = Symbol('123');

console.log(ids === anotherIds);

const bigNumber = 1234567890123456789012345678901234567890n;



// Refrence (Non primitive)

//Array, Object, Function


const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Noor",
    age: 22,

}

const myFunction = function() {
    console.log("Hello World");
}  

console.log(typeof scoreValue);
