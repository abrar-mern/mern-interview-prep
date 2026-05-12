1.) What is CORS?
Answer - CORS stands for Cross Origin Resource Sharing.
It is a browser security feature that prevents the website from making request to another domain unless the server explicitly allows it.

-------------------------------------------------------------------------------------------

2.) What is an origin ?
Answer - The browser defines origin using three things
a.) Protocol - http or https
b.) Domain - abc.com or example.com
c.) Port - 441 or 5050 or any of the port

-------------------------------------------------------------------------------------------

3.) Tell the important CORS header ?
Answer - 
a.) Access-Control-Allow-Origin - Specifies which domains are allowed * for all and 
[https://example.com/]

b.) Access-Control-Allow-Methods - Specied allowed Http verbs (GET,POST,PUT,etc)

c.) Access-Control-Allow-Headers - Allowed custom headers like authorization or Content-Type

d.) Acess-Control-Allow-Credentials - Set to true if you need to send Cookies or Auth headers.

-------------------------------------------------------------------------------------------

4.) Preflight Request Options?
Answer - You should know what the complex request are

a.) Method - Any request other than GET,HEAD OR POST are preflight request.
b.) Content-Type if you are using application/json it will always trigger preflight request.
c.) Custom Header - Adding header like authorization will trigger preflight request.

-------------------------------------------------------------------------------------------

5.) What is req and res ?
Answer - req is an instance of Incoming messages to send datat from the client and the res is an instance of Server used to send data and header back to the client.
In CORS, req is used to check the preflight option and res is used to sedn the necessary Acess Control Headers

-------------------------------------------------------------------------------------------

6.) What is fetch?
Answer - It is the modern method used to make asynchronous Https request methods earlier we were using XMLHttpRequest