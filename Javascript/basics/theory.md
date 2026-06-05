1.) Is Javascript a statically typed language or dynamic typed language ?

Answer - Javascript is a dynamically typed language. It means all checks are done at run time when program is executed.
So we can assign anything to the variable and its work fine. 
Whereas Typescript is statically typed language where it check all the types during compile time.

-------------------------------------------------------------------------------------------

2.) What is Compile Time and Run Time Environment ?

Answer - Javascript first parses the source code to check if there is any syntax errors then it uses JIT(Just In Time) Compiler to convert that code into machine understandable bytecode. Finally the code executed within a run time that is browser or Node.js  which provide necessary API to manage the program's flow

-------------------------------------------------------------------------------------------

3.) What are the different datatypes in javascript ?

Answer - Dataypes are categorized into 2 formats

i.) Primptive Datatypes - Primptive datatypes are immutable that means it cannot be changed once created
There are 7 primptive datatypes

a.) String - Used for text wrapped in single quotes, double quotes or backticks
    Eg : - let name = 'Abrar'

b.) Number - Represents both a number and floating point numbers decimals. It also includes special value like Infinity,
             -Infinity, NaN
    Eg : - let pi = 3.14

c.) BigInt - Used for integers larger than Number type can safely handle
    Eg : - let hugeNumber = 9007199254740991n;

d.) Boolean - A logical entity that can be only true and false
    Eg : - let isCoding = true

e.) undefined - Variable is created but value is not assigned
    eg : - let a; // a is undefined

f.) null - Intentionally making value of variable as null. It means to say it is empty on purpose
    eg : - let a = null;

g.) Symbol - A unique identifier often used as object properties to avoid collusions
   eg : - x = Symbol('Hello World')



ii.) Non primptive Datatypes -  If it is not primptive means it is an object. An object is a collection of properties and are stored by reference means (it point to the location of the memory not the value it self)

a.) Object - The base of all complex data are stored in key value paris
   let user = {
     "name" : "Abrar",
     "age" : 24
   }

b.) Arrays - Arrays are technically object that are used to stored list
   let arr = [1,2,3,4,]

c.) Functions - Function can be passed around variable means function is stored in the variables
    
-------------------------------------------------------------------------------------------

Important Concept - 
1.) How does Javascript store variable
Answer - Javascript store variable in 2 format for primptive datatypes it store the value in stack and for non primptive datatypes it stored in heap format as in heap it require flexibility because object can be added or removed

2.) How does Heap Works
Answer - When we store the object in heap format like {"name":"Abrar"} then it returns the adress and address is stored in
stack for speed and connected with the variable name in this manner non primptive value is stored.
As object size can be from 1mb - 100mb but the adress value is of 64bits

-------------------------------------------------------------------------------------------

4.) What is Hoisting in javascript ?
Answer - In javascript variables and functions can be accessed even before declaring it as javascript compiler moves all
the declarations of variables and functions on the top so there will not be an error. This is called hoisting

How does Hoisting works ?
Answer - To understand the hositing first we need to understand the memory allocation phase as before the executing the code
javascript scan the code and check if there is any functions or variables in it 

-If the function is found then it stores the whole function in it 
-If the variable using var is found it initalize using undefined so when we are trying to print var before declaration we get undefined
-If the the varibles are let and const memory is allocated, they are not initalized they stay in temporal dead zone.
-When we are using arrow function as we are storing function in variables this will be treated as variables same as arrow function

-------------------------------------------------------------------------------------------

5.) What is temporal dead zone ?
Answer - It is a specific time period in the execution of the javascript code where the variables are assigned using let and 
const and cannot be accessed until the value is assigned. Any attempt to this result to be in reference error   

-------------------------------------------------------------------------------------------

6.) What is window object ?
Answer - If we are declaring a variable using var and creating a function which can be access globally so it is attached
to window object. let and const cannot be attached to window object because it is stored in temporal dead zone

-------------------------------------------------------------------------------------------

7.) Var and let and const
Note - As in var you can reassigned and reinitialize but in let you cannot redeclate buit you can reinitialize it
and in const you have declare and initialize simultaenously otherwise it give syntax error

-------------------------------------------------------------------------------------------

8.) Types of Error
Answer - Reference Error, Syntax Error and 
Type Error - If you are reintializing then it is an type error of const

-------------------------------------------------------------------------------------------