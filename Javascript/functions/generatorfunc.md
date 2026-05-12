1.) What are generator functions ?
Answer - 
a.) A generator function is a function which can be paused and resumed at any point during the execution.
b.) They are defined by function * and it contains one or more yield expression.
c.) The main method of generator is next() when calls it runs the execution until the nearest yeild
d.) It contains an object which contain 2 properties 
1.) done : the yeilded value

2.) value : true if function code has finished else false.

Example 1
function* generatorFunction(){
    yeild 1;
    yeild 2;
    yeild 3;
    yeild 4;
}

const generator = generatorFunction();
console.log(generator.next())

Example 2

function* chat(){
    const reply = yield "How are you baby!";
    console.log(`Hi, nice to meet you and ${reply}`);
}

const iterator = chat();
console.log(iterator.next().value);
iterator.next("Babbu");