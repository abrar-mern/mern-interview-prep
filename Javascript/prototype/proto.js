const user = {
    name : "chai",
    email : "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : Teacher
}
Teacher.__proto__ = user;
// Modern Syntax
Object.setPrototypeOf(TASupport,TeachingSupport)


// console.log(TASupport.__proto__)
// console.log(Teacher.__proto__)



// let myName = 'Abrar     ';
// // console.log(myName.length);

// Object.prototype.removeExtraSpaces = function(){
//     console.log(`${this}`)
//     console.log(`${this.length}`)
//     console.log(`${this.trim().length}`)
// }
// myName.removeExtraSpaces();



let myName = 'Abrar   '
Object.prototype.removeExtraSpaces = function(name){
    console.log(`${this}`)
    console.log(`${this.trim().length}`)
}
// console.log(myName.trim().length)

myName.removeExtraSpaces()