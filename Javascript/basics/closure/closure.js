
// Example 1
function x(){
    var a = 10;
    function y(){
        var a = 1
        console.log(a)
    }
    a = 200;
    return y
}

let z = x();
z();


// Example 2
function z(){
    let a = 100;
    let b = 100;
    function x(){
        a = 200;
        function y (){
            console.log(a);
        }
        a = 300
        y()
   
    }
    x();
       
}
z()