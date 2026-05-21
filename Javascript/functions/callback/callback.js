setTimeout(function(){
    console.log('timer');
},5000)


function x(y){
    console.log('x');
    y()
}

x(function y (){
    console.log('y');
})

// Understand callback with event listener

document.getElementById('clickme').addEventListener('click', function(){
    console.log('Button clicked');
})