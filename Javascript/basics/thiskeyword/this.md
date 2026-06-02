1.) this in global space
console.log(this)
Note : - Here this keyword refers to global space and it depends like where are we running the code for eg : - browser or node

-------------------------------------------------------------------------------------------

2.) Inside function
function x(){
console.log(this)
}
x() 
Note : - Here when we are invoking a function here this will print the window object but when we use strict mode the value will be undefined

In this it also depends on how the function is been called

window.x();

-------------------------------------------------------------------------------------------

3.) In Strict Mode - (this substitution)
If the value of this keyword is undefined or null this keyword will be replaced as a global object only in non strict mode 

-------------------------------------------------------------------------------------------

4.) 