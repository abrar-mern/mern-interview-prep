function multipleBy5(num){
    return num * 5
}
multipleBy5.power = 2
const output = multipleBy5(5)
// console.log(output)
// console.log(multipleBy5.power)

function createUser(name,score){
    this.name = name;
    this.score = score;
}

createUser.prototype.increment = function (){
   this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`)
}

const chai = new createUser('tea',23);
const tea = new createUser('coffee',30)
// chai.printMe();