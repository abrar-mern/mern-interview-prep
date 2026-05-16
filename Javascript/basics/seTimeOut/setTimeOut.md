1.) What is setTimeout ?
Answer - setTimeout is used to call a function or evaluate an expression after specific number of milliseconds

For eg : -
console.log('start');
setTimeout(function(){
    console.log('Welcome to JS !!')
},5000)
console.log('end');

-------------------------------------------------------------------------------------------

2.) What is clearTimeOut ?
Answer - Clear Time out is used to stop setInterval from being executing

For eg : - 
console.log('start');
const setTimer = setTimeout(function(){
    console.log('Welcome to JS !!')
},5000)

clearTimeout(setTimer)
console.log('end');

-------------------------------------------------------------------------------------------

3.) What is setInterval ?
Answer - setInterval is used to call a function or evaluate an expression at specific intervals

For eg : -
const timer = setInterval(function(){
    console.log('Execute after eevery 3 seconds)
})

-------------------------------------------------------------------------------------------

4.) What is clearInterval ?
Answer - It is used to stop setInterval

For eg : -
const timer = setInterval(function(){
    console.log('Execute after eevery 3 seconds)
})

clearInterval(timer)