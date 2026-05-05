1.) What is call method?
Answer - Call method is used to invoke the function immediately with the given value and allow us to pass the the argument one by one with comma seperated.

let name = {
    firstName : 'Abrar',
    lastName : 'Khan',
}
const printFullName = function(hometown,state){
        console.log(`FirstName : ${this.firstName}`)
        console.log(`LastName : ${this.lastName}`)
        console.log(`from ${hometown}`)
        console.log(`from ${state}`)
    }
printFullName.call(name,'Dehradun','Maharashtra')

// Object 2 - Borrowing function

let newname = {
    firstName : "Ajay",
    lastName : "Thalapathi", 
}

printFullName.call(newname,'Pune','Maharashtra')


2.) Apply - The only difference between call and apply is used when we passed the parameter is seperates using array

let name = {
    firstName : 'Abrar',
    lastName : 'Khan'
}
const printFullName = function(hometown,state){
    console.log(`FirstName : ${this.firstName} and LastName : ${this.lastName} from : ${hometown} and ${state}`)
}
printFullName.apply(name,['Dehradun','Delhi'])

let newname = {
    firstName : 'Rahul',
    lastName : 'Gandhi'
}
printFullName.apply(newname,['Pune','Maharashtra'])


3.) Bind Method- Bind method instead of invoking imeediately it gives us the copy that can be invoked later

let name = {
    firstName : "Abrar",
    lastName : "Khan"
}
let printFullName = function() {
    console.log(`FirstName is : ${this.firstName} and lastName is ${this.lastName}`)
}
const bindName = printFullName.bind(name);
bindName()