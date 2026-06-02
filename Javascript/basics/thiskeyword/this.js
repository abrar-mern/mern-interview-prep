"use strict"

// this in global space
console.log(this) // global object - window object

// this inside a function
function x(){
    console.log(this);
}
x(); // undefined or null
window.x(); // window

// this inside a object method
const obj = {
    a : 10,
    x : function(){
        console.log(this.a)
    }
}

obj.x();

// this inside call, apply or bind method
const student = {
    name : "Vaibhav",
    printName : function(){
        console.log(this.name)
    }
}

student.printName();

const student2 = {
    name : "Abrar",
}
student.printName.call(student2);

// this inside arrow function

const obj1 = {
    a : 10,
    x : () => {
        console.log(this)
    }
}
obj1.x();

// this inside nested arrow function

const obj2 = {
    a : 30,
    x : function(){
        // enclosing lexical object
        const y = () => {
            console.log(this)
        }
        y();
    }
}

obj2.x();


// this inside a DOM elemnent = html element