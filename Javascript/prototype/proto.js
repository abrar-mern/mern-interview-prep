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



let myName = 'Abrar  '
console.log(myName.length);

Object.prototype.calLength = function(name) {
    return `${this.trim().length}`
}
console.log(myName.calLength());

