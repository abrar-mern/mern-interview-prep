// window.localStorage.setItem("name","Vaibhav");
// window.localStorage.setItem("age","29");

// Get Item
// console.log(localStorage.getItem("age"));

// Remove Item
// console.log(localStorage.removeItem("name"));

// Clear all item
// console.log(localStorage.clear());

// As it stored only strings but we want to store in the form of object
const user = {
    name : "Abrar"
}
localStorage.setItem("details",JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem("details")))