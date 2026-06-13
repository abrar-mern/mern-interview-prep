'use strict'
// Global Space
console.log(this); // It represents the global object i.e window object

// this inside a function
function x(){
    // The value depends on strict or non-strict mode
    console.log(this)
}

// this keyword depends on how the function is called
window.x()

// If the value is undefined or null it will be replaced by global object only in non-strict mode

// this inside a object method

const student = {
    // Here this referes to the object name
    name : 'Abrar',
    printName : function(){
        console.log(this.name)
    } 
}
student.printName();

const student2 = {
    name : 'Sahil'
}
student.printName.call(student2)

// this inside arrow function
// As arrow function does not have a this reference so it takes the refence from it enclosing lexical scope
const arrowthis = {
    name : 'Rahul',
    x : () => {
        console.log(this)
    },
    y : () => {
        console.log(this)
    }
}
arrowthis.y();


// second example
const arrowfn = {
    name : 'Pandu',
    x : function (){
        const y = () => {
             console.log(this)
        }
        y()
    }
}
arrowfn.x();