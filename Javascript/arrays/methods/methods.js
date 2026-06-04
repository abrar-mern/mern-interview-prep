// toString Method with Strings
const fruits = ["apple", "banana", "mango"];
const arrayString = fruits.toString();
console.log(arrayString);

// toString method with mix datatypes
const mixedArr = [12, true, false, 24.5];
const mixedString = mixedArr.toString();
console.log(mixedString);

// ==================================================
// join method
// ==================================================

const joinMethod = ["rasik", "madar", "bhagar"];
const joinArr = joinMethod.join("-");
console.log(joinArr);

// ==================================================
// at method
// ==================================================

const person = ["Vaibhav", "Saras", "Ajit"];
const findPerson = person.at(2);
console.log(findPerson);

// ==================================================
// pop method
// ==================================================

const employee = ['Atish','Saras','Rahul']
const removelastElement = employee.pop();
console.log(removelastElement);


// ==================================================
// push method
// ==================================================

const addEmployee = ['Atish','Saras','Rahul'];
const newEmployee = addEmployee.push('Geeta');
console.log(addEmployee);

// ==================================================
// shift method
// ==================================================

const diet = ['milk','dates','no sugar']
const newdiet = diet.shift()

console.log(diet);

// ==================================================
// unshift method
// ==================================================

const subject = ['Physics','Chemistry','Biology']
subject.unshift(['Mathematics'])
console.log(subject);

// ==================================================
// concat method
// ==================================================

const alpha = ['a','b','c']
const numeric = [1,2,3]
const alphanumeric = alpha.concat(numeric);
console.log(alphanumeric);


// ==================================================
// copywithin method
// ==================================================

const items = ['item 1', 'item 2','item 3', 'item 4','item 5', 'item 6',]
const placedItems = items.copyWithin(3,0,4);
console.log(placedItems)


// ==================================================
// flat method
// ==================================================

const nestedarr = ['1','2','3',['4','5'],'6']
const newArr = nestedarr.flat()
console.log(nestedarr);
console.log(newArr);

// ==================================================
// fill method
// ==================================================

const letters = ['A','B','C','D','E']
const newletters = letters.fill('X',0,3)
console.log(letters);
console.log(newletters);

// ==================================================
// some method
// ==================================================
const numbers = [1,2,3,4,5,6,7,8,9,10,11]
const greaterNumber = numbers.some(num => num > 10)
console.log(greaterNumber)

// ==================================================
// every method
// ==================================================

const checkEvenNumber = [2,1,3,5,7]
const someNumber = checkEvenNumber.every((num) => num%2==0)
console.log(someNumber)