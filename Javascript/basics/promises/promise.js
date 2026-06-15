const promiseOne = new Promise(function (resolve, reject){
    setTimeout(() => {
        console.log('Async Task')
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log('Promise is consumed')
})

promiseOne.catch(() => {
    console.log('Error Identified')
})


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Promise 2 is executed')
        resolve();
    }, 2000);
})
.then(() => {
    console.log('Promise2 is consumed')
})