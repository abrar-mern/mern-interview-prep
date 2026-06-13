function x(){    
    var b = 10;  
    y()
    function y(){
         console.log(`c value ${b}`)
    }
    return y;
}
var z = x()
z()
