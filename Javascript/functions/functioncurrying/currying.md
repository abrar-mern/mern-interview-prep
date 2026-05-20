1.) What is Function Currying ?
Answer - Currying is a technique in functional programming where the function take multiple arguments and trasnformed into a series of nested function.

-------------------------------------------------------------------------------------------

2.) Working of function currying

Answer - 
function carriedSum(a){
    return function(b){
        return a + b;
    }
}
// Invoke a function
let step1 = carriedSum(5)
let result = step1(20);
console.log(result);

lets talk about this example 
here our function is there carriedsum and we have passed the parameter a and inside that we are returning an anonymous function and its paramter is b and we are returning a + b

but here comes the function currying concept where 
we have passed step 1 = carriedSum(5)
here we have passed as function expression and 5 is the value of a after that it will be popped out but it will remain in the heap memory as here is the concept of clsoure
then we are doinf result = step1(20)
and printing result as the anonymous function we have ise return so the control goes to the result and print it out

-------------------------------------------------------------------------------------------