1.) What is prototype ?
Answer - If we want to add properties at later stage to a function which can be acessible across all instances. There will be using prototype 

Concept of  how prototype works

Note : - When we are creating object or function or variables it wrapped under object and attached to hidden object called __proto__ to our object.

let arr = ["Abrar","Atish","Pranali"]

here arr.__proto__ is equal to Array.prototype

** When we start javascript engine memory create master objects like 
a.) Object Master
b.) Array Master
c.) Function Master

and after that arr.__proto.__proto__ = Object.prototype

