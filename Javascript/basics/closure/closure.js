
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

// let z = x();
// z();


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
// z()


// Understanding event listeener with closure

// Count of how many times btn is clicked


function checkCount(){
    let count = 0
    if(count<=0){
        console.log('User have not clicked on the button')
    }
    document.getElementById('btn-click').addEventListener('click', function(){
        console.log(`User have clicked the button ${++count} times`)
    })
}
checkCount()