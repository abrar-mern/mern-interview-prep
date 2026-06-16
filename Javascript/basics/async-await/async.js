
const p = new Promise((resolve,reject) => {
    resolve('Promise resolved');
})

async function getData() {
    return p;
}

const getPromise = getData();
// console.log(getPromise)

// getPromise.then((response) => console.log(response))


// Using async and await

const p1 = new Promise((resolve, reject) => {
    resolve('Promise one is resolved')
})

async function fetchData(){
    const val = await p1;
    console.log('Value is', val)
}
// fetchData()


// Promise using setTimeout

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Setimeout promise function')
    }, 10000);
})

const p3 = new Promise ((resolve, reject) => {
    setTimeout(() => {
       resolve('Promise 3 is reolsved') 
    }, 5000);
}) 


async function handlePromise() {
    const val = await p2;
    console.log(val)
    console.log('First await')

    const val1 = await p3;
    console.log(val1)
    console.log('Second await')
}

handlePromise()

// function getNewPromise(){
//     p2.then((response) => console.log(response));
//     console.log('Namste JS')
// }

// const fetchPromise = getNewPromise();
// console.log(fetchPromise)


