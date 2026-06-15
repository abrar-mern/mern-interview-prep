function multiple(num){
    return num * 5
}
console.log(multiple(2))
console.log(multiple.power=2)
console.log(multiple.prototype)

//
function createUser(name,price){
    this.name = name;
    this.price = price;
}

createUser.prototype.printMe = function(){
    console.log(`Price for ${this.name} is ${this.price}`)
}

const chai = new createUser('chai',20);
const coffee = new createUser('coffee',100)
chai.printMe()
coffee.printMe()