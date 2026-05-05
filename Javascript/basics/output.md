## Basics — Output (moved from basics.txt)

The following are your solved output/code snippets for basic JS interview questions. The original content was preserved and placed here for revision.

```javascript
// JS Interview Preparations
Logic Based Questions

-------------------------------------------------------------------------------------------

1.) Find the even and odd numbers
let num = 20;
if (num%2==0){
    console.log("The Number is even")
}
else{
    console.log("The Number is odd")
}
    
-------------------------------------------------------------------------------------------

2.) Find the Largest number using built in operator
let a = 10; b = 20; c = 30;
let largestNumber = Math.max(a,b,c);
console.log(largestNumber);

-------------------------------------------------------------------------------------------

3.) Find the largest number without built in operator
let a = 25; b = 40; c = 60;
let largest = a>b ? (a>c ? a : c) : (b>c ? b : c)
console.log(largest)

-------------------------------------------------------------------------------------------

4.) Reverse the number using built in method
let num = 123;
let reverseNumber = parseInt(num.toString().split('').reverse().join(''))
console.log(reverseNumber);

---------------------------------------------------------------------------------------------

5.) Reverse the number without using the built in method

function reverseNumber(num){
    //0-9 same number
    if(num>=0 && num<=9){
        return num;
    }
    let reverseNum = 0;
    while (num!=0){
        reverseNum = reverseNum*10 + (num%10);
        // First Iteration
        // 0=0*10 + 123%10 = 3
        // reverseNum = 3
        
        // Second Iteration
        // reverseNum = 3*10 + (12%10)
        // reverseNum = 30 + 2
        
        // Third Iteration
        // reverseNum = 32*10 + (1%10);
        // reverseNum = 320 + 1
        // reverseNum = 321
        
        num = Math.floor(num/10)
        // First Iteration
        // num = 123/10 = 12
        
        // Second Iteration
        // num = 12/10
        // num = 1
        
        // ThirdIteration
        // num = 1/10
        // num = 0.1-> 0
    }
    return reverseNum;
    // 321
}

console.log(reverseNumber(123))

---------------------------------------------------------------------------------------------

6.) Check Palindrome or not

function isPalindrome(num){
    if(num>=0 && num<=9){
        return num;
    }
    let reverseNum = 0;
    let originalNumber = num;
    while (num!=0){
        reverseNum = reverseNum * 10 + (num%10);
        num = Math.floor(num/10)
    }
    return originalNumber === reverseNum
}

console.log(isPalindrome(1221))

---------------------------------------------------------------------------------------------

7.) Factorial of the number // 5*4*3*2*1 = 120

function factorialNumber(num){
    let result = 1;
    for (let i = 1; i<=num;i++){
        result = result * i;
    }
    return result
}
console.log(factorialNumber(5))

result = 1 ; i =1 ... 1*1=1
result = 1 ; i=2......1*2=2
result = 2;i=3 .....2*3=6
result = 6;i=4....6*4=24
result = 24;i=5 ... 24*5 = 120

---------------------------------------------------------------------------------------------

8.) Check Prime Number or not -> Prime numbers are the number which is divided by themself and by 1
Note : 1 is not Prime
function checkPrime(num){
    if(num<=1){
        return "It is not an Prime Number"
    }
    for (let i=2;i<=num;i++){
        if(num%i==0){
            return "It is not a Prime number"
        }
    }
    return "It is a Prime Number"
}


checkPrime(22)

---------------------------------------------------------------------------------------------

9.) Find sum of number without using String

function sumOfNumber(num){
    let sum = 0;
    while (num>0){
        let lastDigit = num%10;
        sum = sum + lastDigit;
        num = Math.floor(num/10)
    }
    return sum;
}
console.log(sumOfNumber(123))

---------------------------------------------------------------------------------------------

10.) What will be output for below 
var a = 10;

function test(){
    console.log(a);
    var a = 20;
}

test();

Answer - a is redeclared and reinitialized as a is in global scope and function scope in function it will check the nearest value once it is found it will be initialized with undefined and then value be assigned, if we are not redeclaring then the value of global scope will be acessed
undefined

---------------------------------------------------------------------------------------------

11.) What will be output for below 
var a = 10;

function test(){
    console.log(a);
    a = 20;
}

test();
console.log(a);

Answer - As we are reinitializing the value so the value will be impacted globally

10
20

---------------------------------------------------------------------------------------------

12.) What will be the output for below 
Answer - 
-let and const are block scope
- var is function scope

let a = 10;
function test(){
    console.log(a);
    if(true){
        a = 20;
        console.log(a)
    }
}
test()