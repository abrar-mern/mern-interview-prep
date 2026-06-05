// ==================================================
// Syntax Error
// ==================================================

// const a = ;

// ==================================================
// Reference Error
// ==================================================

// const val = y;
// function x(){
//     data();
// }

// ==================================================
// Type Error
// ==================================================

// const strName = ['abrarkhan']
// console.log(strName.toUpperCase());

// ==================================================
// Range Error
// ==================================================

// const num = 10.14678;
// console.log(num.toFixed(140));

// ==================================================
// Eval Error
// ==================================================

const url = 'https://www.google.com/'
const encodedUrl = encodeURIComponent(url);
console.log(encodedUrl)
const decodeUrl = decodeURIComponent(encodedUrl)
console.log(decodeUrl)

// check the error
try{
    console.log(decodeURIComponent("%dd")) // here we will get error
}catch(err){
    console.log(err.message)
}

throw new URIError("ABRAR KHAN");
    