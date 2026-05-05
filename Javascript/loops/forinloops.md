1.) What is for in loops?
Answer - It is used to iterate over values in an object where it iterates over keys

let person = {
    name : "Abrar",
    age: 26,
    status: "Working"
}
for (const n in person){
    console.log(`Keys are : ${n} and values are : ${person[n]} `)
}   