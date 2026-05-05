1.) forEach Method?
Answer - It is an inbuilt method in array. It is used to execute a function once for each element in an array

let names = ['Shubham','Ashish','Pranali']
names.forEach(getName)

function getName(value,index){
    console.log(`Id of users are : ${index}. Name of users are : ${value}`)
}

