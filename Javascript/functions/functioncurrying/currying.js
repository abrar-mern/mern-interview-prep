// 1st Method

function carriedSum(a){
    return function(b){
        return a + b;
    }
}
// Invoke a function
let step1 = carriedSum(20)
let result = step1(25);
console.log(`Output from first method : ${result}`);


// 2nd Method
function carriedSum1(a){
    return function (b){
        return a + b
    }
}

let result1 = carriedSum1(20)(25);
console.log(`Output from second method : ${result1}`);