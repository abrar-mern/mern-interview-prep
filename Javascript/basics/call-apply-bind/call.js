let vaibhav = {
  name: "Vaibhav Denge",
  email: "vaibhav@gladowl.com",
};

const printFullName = function (gender, hometown, state) {
  console.log(
    ` Name of employee is ${this.name} and ${gender} is from ${state} and locally stay in ${hometown} `,
  );
};
// apply method
printFullName.apply(vaibhav, ["he", "gladowl", "balewadi"]);

console.log(vaibhav);

let pranali = {
  name: "Pranali Ture",
  email: "pranali.ture@gladowl.com",
};
// call method
printFullName.call(pranali, "she", "masla", "kokan");
console.log(pranali);


//bind method

let abrar = {
    name : 'Abrar',
    email : 'abrar.khan@gladowl.com'
}
const bindObject = printFullName.bind(abrar,'HE','HE','HE')
bindObject()

console.log(abrar)