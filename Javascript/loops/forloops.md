1.) For loop

a.) First Example - Basic Example
for(let i=1; i<=10; i++){
     const element = i;
    if(element==5){
        console.log("5 is printed")
    }
    console.log(i)
}

b.) Second Example - Nested for loop

for(let i=1;i<=10;i++){
    console.log("")
    console.log(`Value of Outer Loop ${i}`);
    
    for(let j=1;j<=10;j++){
        console.log(`${i} * ${j} =  ${i*j}`)
    }
}

c.) For loop using array

let fruits= ['apple','banana','mango']
for(let i=0;i<fruits.length;i++){
    console.log(`Value of fruits ${i}`)
}

d.) Break  - for loop // 
Once we write break here it will break the loop as we are targeting 5 it will print all
number before 5 

for (let index=0;index<10;index++){
    const element = index
    if(element==5){
        break;
    }
    console.log(element)
}


e.)  Continue - for loop
In continue it will not print only the targeted conditions rest all the iteration will be displayed

for (let index=0;index<10;index++){
    const element = index
    if(element==5){
        continue;
    }
    console.log(element)
}
