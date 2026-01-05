/*
    primitive datatype:
        - 7 types: String,Number,Boolean,Null,Undefine,Symbol,BigInt

    non-primitive datatype(reference):
        -   Array,Objct,Function
*/

let name = "dhruv";
const score = 100;
const scoreValue = 100.78;
const isLoggendIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol(145);
const anotherId = Symbol(145);
console.log(id === anotherId);
const bigNumber = 24548961896149n;
console.log(typeof bigNumber);

//Array,Object,Function

const names = ["dhruv", "tushar", "ajay", "darshan"];

let myObj = {
  name: "dhruv",
  age: 23,
  gender: "male",
};

const sayHello = () => {
  console.log("Hello Mr Dhruv Ghinaiya");
};

console.log(names);
console.log(myObj);
sayHello();

console.log(typeof names);
console.log(typeof myObj);
console.log(typeof sayHello);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive Datatype) Heap (Non-Primitive)

let myName = "Dhruv";
let secondName = myName;
secondName = "Ajay";

console.log(myName);
console.log(secondName);

let data = {
    name:'dhruv',
    email:'dhruv@gmail.com'
} 

let otherData = data;

otherData.email  = 'hello@gmail.com'

console.log(data);
console.log(otherData);

