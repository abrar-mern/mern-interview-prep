1.) What is Function Statement
Answer - Function statement is normal type of a function where we are giving a function name and then acessing it

Note : - If a function doesn't return anything it return udnefined

-------------------------------------------------------------------------------------------

2.) What is Function Expression
Answer - In function expression we are storing the function in the variables suppose we are declaring variable using var 
and trying to access even before declaring it it will give an uncaught type error

-------------------------------------------------------------------------------------------

3.) What is function declaration
Answer - Function declaration is same as function statement

-------------------------------------------------------------------------------------------

4.) Anonymous Function
A function without a name is called an anonymous function it will give an syntax error

-------------------------------------------------------------------------------------------

5.) Named Function expression
Answer - It is same as function expression but here we can five the function name as well

-------------------------------------------------------------------------------------------

6.) Difference between parameter and argument
Answer - 
Parameters - Whatever lables and identifiers are there in the function scope is called as parameters 
for eg - function(param1,param2)

Arguments - a(2,4)
Arguments are the real values you pass in the functionw when you call it

-------------------------------------------------------------------------------------------

7.) First Class Function

Answer - The ability to use function to be used as values are first class function 
In first class function
1.) who can pass as an argument to another function 
2.) who can return a function inside the function

They are also called first class function


     function x(param1){
        console.log("I am x function")
        param1()
     } // here x is first class function
     x(function y(){
        console.log("I am y function")
     })// y is callback function

-------------------------------------------------------------------------------------------

8.) Arrow Function



-------------------------------------------------------------------------------------------

9.) Callback Function
Anwer - A callback function is a function passed into another function as an argument

     function x(param1){
        console.log("I am x function")
        param1()
     }
     x(function y(){
        console.log("I am y function")
     })// y is callback function

-------------------------------------------------------------------------------------------

10.) IIFE (Immediate Invoke Function Expression)
Answer - An IIFE is a function that runs the second it is defined. It is wrapped in paranthesis to turn the declaration into expression.

eg : - 
(function x(){
    console.log('I am in x function')
})();

-------------------------------------------------------------------------------------------

11.) Pure Function and Side Effect
Answer - The function is pure because it relies on the argument and returns a value without changing the external environment.

For eg 
function calculateTax(price,tax){
   return price + tax
}
calculateTax(10,12)

* Side Effects or Impure 
Answer - The function is impure because it relies on external variable (i.e tax) and modifies the state by logging
console.log into the environment

For eg 
let tax = 0.1
function calculateTotalTax(price){
   console.log("Calculating...")// Side Effect
   return price + (price/tax)
}

-------------------------------------------------------------------------------------------

12.) Function Currying
Answer - Currying is the process where the function need multiple arguments and turning into a series of nested functions
that each take only one argument at a time

let multiply = function(x){
        return function(y){
            console.log(x*y)
        }

    }
    let multiplyByTwo = multiply(2);
    multiplyByTwo(5) // 10

    let multiplyByThree = multiply(3);
    multiplyByThree(5) // 15


-------------------------------------------------------------------------------------------

13.) Closures
Answer - A closure is together bundled with it lexicon environment

 function x(){
            let a = 7;
            function y(){
                console.log(a);
            }
            return y;
        }
        let z = x();
        console.log(z);
        z();

-------------------------------------------------------------------------------------------

14.) Uses of closure
Answerr - 
1.) Function currying
2.) setimeout
3.) Iterations and many more


-------------------------------------------------------------------------------------------

15.) What are arrow functions
Answer - It is introduced in ES6 it is a more concise way to write a function

-------------------------------------------------------------------------------------------

16.) What are the limitations of arrow function in javascript?
Answer - 
1.) Arrow function cannot be accessed before initalization
2.) 

Note : - Complete after wards

-------------------------------------------------------------------------------------------

16.) Higher order functions
Answer - In javascript higher order function are the function which take another function treat as a data
It qualifies to higher order function if any one of the following things is done
1.) It takes one or more function as an arguments
2.) Return a function as a result

-------------------------------------------------------------------------------------------

17.) What are map function?
Answer - Map is used to transform a whole array and return a new array

Note : - Make a note if we are using higher order functions and passing callback no need to write 
paranthesis as we are giving adress of the function. not the function

Eg -  console.log(calculate(rad,circumference))
here circumference is also the function still we are not giving paranthesis()
-------------------------------------------------------------------------------------------

18.)What are Filter ?
Answer - Filter are used to filter out the items

-------------------------------------------------------------------------------------------
19.) What is reduce ?
Answer - Reduce method is used to convert the array into single value.
like sum,object string or even other array.

Note : - While passing the reduce method in the paramter that is acc,curr
We can pass the initial value of the acc
-------------------------------------------------------------------------------------------

20.) What is Set?
Answer - Set is used to store all the unique values in an array. It has methods
1.) set.add()
2.) set.delete()
3.) set.has() // It return boolean value
4.) set.clear()
5.) set.size()
Note : - Set uses Strict equality for example if you are writing set.delete()
it will only delete the exact 5 not "5"
To delete the object you need to store in the variable

-------------------------------------------------------------------------------------------
**
21.)Why not just use an array and check includes instead of set has?
Answer - 
1.) Array.includes 0(n) means if the array has 1 million item it takes time depending upon the propertion of data
2.) Set.has() it is 0(1) is the constant time whether the set has 10 items it will take the same amount of time
0 - Big Notation
n - Linear
1 - constant
-------------------------------------------------------------------------------------------

22.) What is Map in Object ?
Answer - Map is the collection of key value pairs. Map is two dimensional.
We prefer object over map because map points to memory referece
for eg : const obj1 = {name:"Abrar"}
here if it was a object then it point sto exact text but if we are using map then points to memory reference and the major difference found is object store everything in the form os string apart from symbols but the map maintains the exact datatype

When we use method delete so it delete using the key not the value
-------------------------------------------------------------------------------------------