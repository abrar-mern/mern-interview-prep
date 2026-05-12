1.) forEach Method?
Answer - It is an inbuilt method in array. It is used to execute a function once for each element in an array

let names = ['Shubham','Ashish','Pranali']
names.forEach(getName)

function getName(value,index){
    console.log(`Id of users are : ${index}. Name of users are : ${value}`)
}

-------------------------------------------------------------------------------------------

2.) Write Custom ForEach Loop
Answer -  Approach 1 (Without checking edge cases)

Array.prototype.customForEach = function (callback){
    for (let i = 0; i< this.length; i++){
        callback(this[i],i,this)
    }
}
let names = ['Abrar','Sahil'];
names.customForEach(getNames);

function getNames(val,index){
    console.log(`Values are ${val}`)
    console.log(`Index are ${index}`)
}


Answer - Approach 2 (Checking all the edge cases)


Array.prototype.customForEach = function(callback,thisContext){
    if(typeof callback !== 'function'){
        throw new TypeError `${callback} is not an function` 
    }
    const length = this.length;
    let i=0;
    while (i < length){
        if(this.hasOwnProperty(i)){
            callback.call(thisContext,this[i],i,this)
        }
         i++
    }
   
}

-------------------------------------------------------------------------------------------

3.) Write custom map function

Array.prototype.myMap = function(callback){
    let newArr = [];
    let result;
    for (let i=0; i<this.length; i++){
        result = callback(this[i],i,this);
        newArr.push(result);
    }
    return NewArr;
}

const number = [1,2,3,4,5]
const doubled = number.myMap((num) => {
    return num *2
})      