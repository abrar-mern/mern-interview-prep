1.) find method?
Answer - The find method in javascript is used to retreive the first element that matches the specified condition

for eg : - 
let ages = [12,24,16,28]
let calculateAge = ages.find(function(value){
    if(value>=18){
        return value;
    }
})
console.log(calculateAge)

2.) findIndex method
Answer - findIndex method is used to retreive the first element index that matches the specified condition

let ages = [12,24,16,28]
let calculatAge = ages.findIndex(findAge);
function findAge(value){
    if(value>=18){
        return value;
    }
}
console.log(calculatAge)

