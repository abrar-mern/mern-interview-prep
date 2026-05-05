1.) What is an object?
Answer - An object is defined by curly braces {}. Inside we define a key and the value that holds the data.
Properties - are the variables attached to the object
Methods - Methods are the function attached to the object

2.) What are the different methods to create an object?
Answer - There are many methods to create an object it depends ont he usecases

a.) Object Literals
Answer - This is the most common method you define key and values directly
const person : {
    fname : "Abrar",
    lname : "Khan",
    fullname : function(){
        console.log(`First Name : ${this.fname}, Last Name : ${this.lname}`)
    }
}

b.)Object Constructor
Answer - A constructor function is a special type of function used to create and initialize multiple similar object

let userDetails = new Object();
userDetails.firstname = 'Abrar';
userDetails.lastname = 'khan';
console.log(userDetails.firstname)

We are trying another example

function getUserDetails(name,age){
    this.name = name;
    this.age = age;
    this.printDetails = function(){
        return `${name} ${age}`
    }
}

const fetchDetails= new getUserDetails('Khan',20);
console.log(`Added objects using constructur object, ${fetchDetails.name}`)


c.) Object.create() - 
Answer - This is used when we want to inherit properties of existing property by creating own object.

Note : - For understanding the concept
Here we are linking 2 object with prototype inheritance that's why we are able to acess the properties and method of another object

let baseMember = {
    isSubscribed:true,
    discount:"5%",
    showBenefits : function(){
        console.log(`Discount level ${this.discount}`)
    }
}

let premiumMember = Object.create(baseMember)
console.log(premiumMember.isSubscribed)


d.) Object.assign()
Answer - This is used when we want to inherit properties of multiple other object while creating a object

let baseMember = {
    isSubscribed : true,
    discount : "5%",
    showBenefits : function(){
        return `Discount Level :${this.discount}`
    }
}

let standardMember = {
    isSubscribed : false,
    price : 1500
    discount : "15%",
    showBenefits : function(){
        return `Discount Level :${this.discount}`
    }
}

const premiumMember = Object.assign(baseMember,standardMember)
console.log(premiumMember.price)



3.) Whats the difference between Object.keys,values and entries ?
Answer - 