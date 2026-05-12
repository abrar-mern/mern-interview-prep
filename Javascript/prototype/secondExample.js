let myHeroes = ['thor','spiderman'];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPowder : function(){
        return(`Spidy power is ${this.spiderman}`);
    }
}
console.log(heroPower.getSpiderPowder())


Object.prototype.abrar = function (){
    console.log(`Abrar is present in all the object`)
}

heroPower.abrar();