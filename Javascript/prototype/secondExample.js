// let myHeroes = ['thor','spiderman'];

// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling",
//     getSpiderPowder : function(){
//         return(`Spidy power is ${this.spiderman}`);
//     }
// }
// console.log(heroPower.getSpiderPowder())


// Object.prototype.abrar = function (){
//     console.log(`Abrar is present in all the object`)
// }

// heroPower.abrar();


// ==================================================
// Checking prototype
// ==================================================

let myheroes= ["thor","spiderman"];

let heroPower  ={
    thor : "Hammer",
    spiderman :  "sling",
    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}

console.log(heroPower.getSpiderPower());

Object.prototype.abrar = function(){
    console.log(`Abrar is present in all the methods and properties`)
}

Array.prototype.helloabrar = function(){
    console.log(`hello Abrar is present in all the methods and proeprties`)
}
heroPower.helloabrar()