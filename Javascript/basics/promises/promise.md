1.) What is an promise ?
Answer - Promise is an object that represent the eventual completion or failure of the asynchronous operation. internally it tracks 2 vital properties that we cannot acess directly via code

Promise Objects are immutable

a.) [[PromiseState]] - The State of the promise
b.) [[PromiseResult]] - The value contained in it (eventually it is undefined)

-------------------------------------------------------------------------------------------

2.) States of the promise ?
Answer - There are 3 states in promises
a.) Pending - Initial state the operation hasn't finished yet
b.) Fulfilled - The operation ahs been succeed.
c.) Rejected - The operation has failed and now promise has some reason(mainly it is an error)

-------------------------------------------------------------------------------------------

3.) Practice Examples for promise?
Answer - 
const GITHUB_API = "https://api.github.com/users"
const user = fetch(GITHUB_API);
console.log(user)
user.then(function(data){
    console.log(data)
})

-------------------------------------------------------------------------------------------

4.) .then method ? 
Answer - The .then() method is how we attach future logic to the response. It will run when your promise is in fulfilled state

-------------------------------------------------------------------------------------------

5.) Why are we using promises ?
Answer -  As previously we used callback and it created callback hell
In ecommerce functionality

const cart = ['shoes','t-sirts','kurta'];
createOrder(cart,function(orderId){
    proceedTopayment(orderId,function(paymentinfo){
        showOrderSummary(paymentInfo,function(){
            updateWalletBalaance(paymentInfo)
        })
    })
})

But after promise we use

createOrder(cart){
    .then(function(orderId){
        return proceedTopayment(orderId)
    })
}
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then(function(paymentInfo){
    return updateWalletBalaance(paymentInfo)
})

Ensure to return in promise chaining

-------------------------------------------------------------------------------------------

6.) Difference between Promise.all, Promise.allsettled, Promise.any and Promise.race ?
Answer - 
a.) Promise.all
We will wait for all the promises to succed or any of the promises to reject.
The behaviour of this are we will return an array only if all promises are in an fulfilled state if any one of the promises get rejected the whole thing get failed

b.) Promise.allsettled
It waits for every promise to finish either success or failure.
The behaviour is you get an array of object describing the outcome of each promise

    
c.) Promise.any
The first success wins
It will return if any of the promises are fullfilled it will ignore if promises are rejected unless if all the promises are rejected.
If all the promises are rejected then it will throw an Aggregate error

d.) Promise.race
It settles as soon as the very first promise get settles (either in fulfilled opr rejected state)
If the fastest promise failes then Promise.race fails. If the fastest succeded the 
Promise.race() suceeded

-------------------------------------------------------------------------------------------