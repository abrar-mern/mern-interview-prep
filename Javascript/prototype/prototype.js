function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2;
// console.log(multipleBy5.power)
// console.log(multipleBy5(10))
// console.log(multipleBy5.prototype)


function createUser(name,score){
    this.name = name;
    this.score = score;
}
createUser.prototype.printMe = function (){
    console.log(`Price is ${this.score}`)
}

const chai = new createUser("chai",200)
const tea = new createUser("tea",250)

chai.printMe()
tea.printMe()

