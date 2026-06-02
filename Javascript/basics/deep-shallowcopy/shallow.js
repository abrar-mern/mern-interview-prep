const originalObj = {
    name : 'Vaibhav',
    address : {
        city : 'Pune'
    }
}

// 1st Method
const newObj = Object.assign({},originalObj);
// console.log(newObj);  

// 2nd Method using spread operator
const shallowCopy = {...originalObj};
console.log(shallowCopy);


originalObj.address.city = "Delhi"
originalObj.address.city = "Delhi"
console.log(originalObj)
console.log(shallowCopy)