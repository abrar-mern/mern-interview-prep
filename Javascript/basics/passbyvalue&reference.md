1.) What are pass by value and pass by reference
Answer - In javascript when you are creating a function and passed an argument you can do with 2 methods
a.) Pass by value
b.) Pass by reference

To understand this concept we need to know about datatypes so there are 2 datatypes 
i.) Primptive Datatypes - these are pass by value
ii.) Non primptive datatypes - these are pass by reference.

** Pass By value with example

let num = 10
function changeNum(val){
   val = 20
   console.log(val)
}
changeNum(num);
console.log(num)

So the ourput will be 10 and 20 as this are passed by value and created theior own indiviual copies

** Pass by reference

let arr = [1,2,3]
function changeArr(num){
   num.push(4);
   console.log(num)
}
changeArr(arr);
console.log(arr)

sO THE output will be [1,2,3,4] here the values have been changed bcoz we have passed by reference as mentioned non primptive are pass by reference it points to memory adress and not create any indiviual copies