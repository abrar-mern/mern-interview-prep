1.) What is the difference between fetch and axios ?
Answer - 
Fetch - It is a method an inbuilt browser api that is supported in most of the modern web browsers.
Axios - Is a third party library that is built on top of XMLHttpRequest object.

Fetch- We need to manually parse the data using response.json()
Axios - It automatially parsing of response

Axios supports interceptors by which we can modify the request and response before they are sent/recieved from the server.

Axios prevents cross site request forgery (csrf)

-------------------------------------------------------------------------------------------

2.) As most of the webbrowsser are there what is the need of the axios?
Answer - In fetch request it treats 404 and 500 as an promise state as ideally that shouldn't be the case so axios handled exact responses so it is prefereble to use axios

-------------------------------------------------------------------------------------------