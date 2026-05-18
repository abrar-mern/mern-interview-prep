1.) What is an promise ?
Answer - Promise is an object that represent the eventual completion or failure of the asynchornous operation. internally it tracks 2 vital proeprties that we cannot acess directly via code

Promise Objects are immutable

a.) [[PromiseState]] - The State of the promise
b.) [[PromiseResult]] - The value contained in it (eventually it is undefined)

-------------------------------------------------------------------------------------------

2.) States of the promise ?
Answer - There are 3 states in promises
a.) Pending - Initial state the operation hasn't finished yet
b.) Fulfilled - The operation ahs been succeed.
c.) Rejected - The operation has failed and now promise has some reason(mianly it is an error)

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