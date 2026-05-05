1.) What are pure function?
Answer - 
a.) Pure Functions are the function which will return the same output for the same input
b.) It does not have any side effect
c.) It does not modify any non local state

function add(a,b){
    return a + b
}
add(5,3)


2.) Impure Function?
Answer - Impure function are the function which give the different output for the same input.
for eg : -

let total = 0;
function calTotal(sum){
    total = total + sum
    return total
}
console.log(calTotal(5))