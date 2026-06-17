// 1st Method

function carriedSum(a){
    return function(b){
        return a + b;
    }
}
// Invoke a function
let step1 = carriedSum(20)
let result = step1(25);
// console.log(`Output from first method : ${result}`);


// 2nd Method
function carriedSum1(a){
    return function (b){
        return a + b
    }
}

let result1 = carriedSum1(20)(25);
// console.log(`Output from second method : ${result1}`);


///////////////

let multiply = function(x,y){
    console.log(x * y)
}

let threeMultiple = multiply.bind(this,3) 
threeMultiple(2)

let fiveMultiple = multiply.bind(this,5)
fiveMultiple(3)


// 1st Method

function newCarriedSum(a){
    return function newSum(b){
        return a + b
    }
}

let sum = newCarriedSum(2);
let resultnew = sum(10)

// 2nd Method

let output = newCarriedSum(40)(40)
console.log(output)