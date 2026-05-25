// window.localStorage.setItem('1','Vaibhav');
// window.localStorage.setItem('2','Ajit');
// window.localStorage.setItem('3','Pranali');

// Fetch the Items
// const getVal = localStorage.getItem("2");
// console.log(getVal);

// Delete specific items
// localStorage.removeItem("2");

// Clear All Item
// localStorage.clear();

// What if we want to store the object as it stores only in the form of string.

const fullDetails = {
    name : "Vaibhav",
    age : "26",
    designation : "Manager"
}
// console.log(fullDetails)

// So we will now store and check what we are getting in the output - 
// Here we will convert into String
localStorage.setItem("1",JSON.stringify(fullDetails));

// and while fetching we will again convert it into an object
const fetchUserString = localStorage.getItem("1"); // This is just a string
const fetchUser = JSON.parse(fetchUserString);

console.log(fetchUser);        

