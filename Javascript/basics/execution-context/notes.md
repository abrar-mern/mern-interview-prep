1.) What is a execution context ?
Answer - Everything inside javascript happens inside an execution context when we run a program an exuction context is created
Important -
Execution context is created in 2 phases
1.) Memory Execution Phase
2.) Code Execution Phase


var n =2;
function square(num){
    var ans = num * num
    return ans;
}
var square2 = square(n);
var square4 = square(4)