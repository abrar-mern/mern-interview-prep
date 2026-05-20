1.) What is a closure ?
Answer - A function bind or bundeld together with its lexical scope is called a closure

function x(){
    var a = 7;
    function y (){
        console.log(a)
    }
}
x()

-------------------------------------------------------------------------------------------

2.) Memory Allocation of closure works

Answer - So you mean to say if i have 2 function x and y okay and in y function i am printing console.log(a)
and in x function i have passed the variable a = 7 ;
so javascript sees that when the function y is invoked as a is not inside the y function so it sees a is inside the lexical scope so it saves in the callstack as well as in the heap memory 
after the function is executed it popped  out from hthe memory but it still stores in the heap beacuse of the lexical environment
when we assign 
let z = x() 
as we will go from right to left so we will assign x() to z and z will be treated as a function and as x is stored in the heap memory so it will be executed as it is not callstack 


-------------------------------------------------------------------------------------------

3.) Uses of closure ?
Answerr - 
1.) Function currying
2.) setimeout
3.) Iterations and many more

-------------------------------------------------------------------------------------------
