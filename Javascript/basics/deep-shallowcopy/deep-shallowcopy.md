1.) How can you create shallow copy ?
Answer - For creating shallow copy we can use it by 2 method
a.) Object.assign() - Here we will pass an aobject and pass the object that is to be copied
b.) Spread Operator - In Spread operator we use ... and then spread that extract the element in an array and if there is an object extract the proeprties in an object

-------------------------------------------------------------------------

2.) How to create deep copy ?
Answer - As if have nested object so we have to use deep copy as if we change nested properties so it will be impacted to original object as well so here we will use the logic i.e
as it point to the same memory reference so we will change it to JSON.stringify even if it is not an JSON we can still use it in the object anad after new memory is allocated then we will use JSON.parse so it behaves exatcly same like an object and our deep copy is also created

-------------------------------------------------------------------------

3.) In a real-world scenario, can you think of a case where using a deep copy might be necessary—like what kind of application or logic might require it over a shallow copy? And maybe what drawbacks you'd consider?
Answer - So I can just tell like two things, like, for example, I am making two API requests and just combining it and just manipulating it into one request. Like I am using get, I am calling two API requests and manipulating it and creating one API over it and pushing it to an destination endpoint. So in that case, my original object snapshot will be remained, so in that manner, a deep copy is useful in that scenario.

-------------------------------------------------------------------------

4.) Can you briefly explain how you'd handle a scenario where you have a large, deeply nested object, and performance becomes a concern—like, would you still rely on these methods, or would you consider a different approach?
Answer - I can just tell like if there are, as we can use shallow copy if there are if we have not any nested objects on it, so shallow copy is a great implementation if no nested things are there. And if nested things are there, we can use a custom library like Lodash, but I haven't used it

-------------------------------------------------------------------------
