1.) What are Spread Operator in Javascript
Answer - Spread operator are used to spread or expand the elements in array or strings
into indviual elements  

-------------------------------------------------------------------------------------------

2.) How to create a spread operator in javascript
Answer - There are 3 method for creatign spread operator
1.) using ... 
const obj1 = {"name":"abrar"}
const obj2 = {...obj1,"age":27}
console.log(obj2)

2.) using Object.assign() method
Answer - Object.assign it copies properties from source to target
const obj1 = {"name":"abrar"}

Note : - Passing array as an indiviual argument to a function
let a = [22,21];
function checkArgs(arg1,arg2){
    console.log(arg1 + arg2)
}
checkArgs(...a)

-------------------------------------------------------------------------------------------

3.) What is Shallow Copy
Answer - A shallow copy is an copy of an object or any array that goes one level deep.
For nested values it takes only the references. if the nested values of the source are changes
then this will also be impacted

-------------------------------------------------------------------------------------------

4.) What is Deep Copy
Answer - A deep copy is copy that clones everything from top to bottom
const obj1 = {"name":"Abrar","adress":{"city":"Delhi"}}
const obj2 = JSON.parse(JSON.stringify(obj1));
obj1.adress.city = "Mumbai"
console.log("obj1",obj1);
console.log("obj2",obj2);

-------------------------------------------------------------------------------------------

5.) What are REST operator?
Answer - REST opearator is used to input multiple elements in an array
it is useful when you dont know how many parameters are there in an array and you want to capture all
of them in an single array

const food1 = "Shaurma";
const food2 = "Tahari";
const food3 = "Biryani";
const food4 = "Dalcha";
const food5 = "Khichda"


function food(...args){
    console.log(args)
}
food(food1,food2,food3,food4,food5)

-------------------------------------------------------------------------------------------

6.) Destructing 
Answer - Extract values from an array or an object and then assign them to a variable in an 
convenient way.

[] - to perform array destructing
{} - to perform object destructing

For example
1.) Swap value to a variable
let a = 10;
let b = 20;

[a,b] = [b,a]
console.log("Value of a",a)
console.log("Value of b",b)

2.) Swapping 2 elements in an array

let colors = ["red","green","blue","black"];
[colors[0],colors[3]] = [colors[3],colors[0]]
console.log(colors)

3.) Assign array elements to variable

const colors = ["red","green","blue","black","white"]
const [fColor,sColor,tColor,...args] = colors
console.log(args)

4.) Extracting values from an object


const person1 = {
    name : "Abrar",
    lastName : "Khan",
    age : 27,
    job:"developer"
}

const person2 = {
    name : "Shail",
    lastName : "shaikh",
    age : 2
}


const {name,lastName,age,job="unemployed"} = person2
console.log(name)
console.log(lastName)
console.log(age)
console.log(job)

5.) Extracting values from an function


const person1 = {
    name : "Abrar",
    lastName : "Khan",
    age : 27,
    job:"developer"
}

const person2 = {
    name : "Shail",
    lastName : "shaikh",
    age : 2
}


function displayPerson({name,lastName,age,job="unemployed"}){
    console.log(`Name: ${name}`)
     console.log(`lastName: ${lastName}`)
      console.log(`age: ${age}`)
       console.log(`job: ${job}`)
}
displayPerson(person2)


-------------------------------------------------------------------------------------------

7.) What is an slice ?
Answer - If we want to create an array that is an subset of an existing array without changing the original array.

In short I mean to say it ised to extract the portion in an array and create a new array out of it

Fo eg : - 
let arr = [1,2,3,4]
let newArr = arr.slice(0,3);
console.log(newArr);
console.log(arr);

-------------------------------------------------------------------------------------------

8.) What is splice ?
Answer - If we want to add/delete/replace exisiting element in an arry then we use splice
and give new array as well

For eg : - 

let arr = [1,3,5,7,9,11];

<!-- arr.splice(startingIndex,countofItemtoReplace,replacingelement) -->

let newArr = arr.splice(1,4,2,4,6,8);

console.log(arr)

Output - 
arr - [ 1, 2, 4, 6, 8, 11 ]
newArr - [ 3, 5, 7, 9 ]

-------------------------------------------------------------------------------------------