## Arrays — Output (moved from arrays.txt)

Your array examples and solutions are preserved below.

```javascript
1.) Reduce method takes the array of multiple values and convert them into a single values
The working of reducers are it takes by default 2 arguments accumulator and currentValue
accumulator are the total value implemented in the previous step
currentValue is where the array is being processed
In the initial value is where the accumulator will start if we forgot to initiate the value then by default it will take the first element in an array

Problem - Find Sum of array 

let arr = [1,2,3,4]
let sum = arr.reduce((accumulator,currentValue) => {
    return accumulator + currentValue
},0)
console.log(sum)

---------------------------------------------------------------------------------------------

2.) Find the max numbers in an array

let arr = [1,2,3,4]
let largestNumber = Math.max(...arr)
console.log(largestNumber)

---------------------------------------------------------------------------------------------

3.) Count even numbers using for of loop

let arr = [1,2,3,4,5,6]
let count = 0
for (let num of arr){
    if(num%2==0){
        count++
    }
}
console.log(count)

---------------------------------------------------------------------------------------------

4.) Remove duplicates in an array
The most efficient and modern way to handle this is using set object. 
A set automatically removes duplicate values and store only unique values

let arr = [1,2,2,3,4,4];
const unique = [... new Set(arr)]
console.log(unique)

---------------------------------------------------------------------------------------------

5.) Reverse an array without using reverse method
let data = [2,5,6,22,30]
function reverse(){
    let temp = []
    for (let i=data.length-1;i>=0;i--){
       temp.push(data[i])
    }
    return temp
}
console.log(reverse(data))

---------------------------------------------------------------------------------------------

6.) Find the second largest numbers

let arr = [10, 5, 20, 8];
function secondLargestFunction(arr){
    const largestNumber = Math.max(...arr);
    const filteredNumber = arr.filter(num=>num!==largestNumber);
    const secondLargestNumber = Math.max(...filteredNumber)
    return secondLargestNumber

}

console.log(secondLargestFunction(arr))

---------------------------------------------------------------------------------------------

7.) Find the missing number in javascript

function missingNumbers(arr){
    let set = new Set(arr);
    let maxNumber = Math.max(...arr);
    let missingNumber = []
    for (let i=1;i<=maxNumber;i++){
        if(!set.has(i)){
            missingNumber.push(i)
        }
    }
    return missingNumber;
}

console.log(missingNumbers([1,2,5]))

---------------------------------------------------------------------------------------------

8.) Find Frequency -> Frequency matlab ye values kitni baar repeat hore


let ages = [20,22,24,20,18,12,24]
let value = ages.reduce((acc,curVal) => {
    if(acc[curVal]){
        acc[curVal] =  acc[curVal] + 1
    }
    else{
        acc[curVal] = 1
    }
    return acc;
},{})
console.log(value)

```

---

Use `theory.md` beside this file to add explanations and complexities.
