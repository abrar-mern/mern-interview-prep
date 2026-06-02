let orginalObj = {
    name : 'Sadvadkar',
    address : {
        city : "Delhi"
    }
}
console.log(orginalObj);


let deepCopy = JSON.parse(JSON.stringify(orginalObj))
console.log(deepCopy);

orginalObj.address.city = 'Pune';
console.log(orginalObj);
console.log(deepCopy);