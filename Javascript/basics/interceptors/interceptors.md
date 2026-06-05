1.) What are interceptors ?
Answer - Interceptors are used to modify the request or response before and after send or received from the server.

---------------------------------------------------------------------------------

2.) Can you explain the key differences between request and response interceptors, and when you might use each in a production app?
Answer - Request Interceptors allows you to modify the request before sending it to the server like adding auth token,http headers or logging
Response Interceptor - while on the other handled it handles incomng data liek parsing the json, validating reponses or throwing any error if something goes wrong.
In production app we will use request interceptor to enure every request is proeorly authenticated and we will use response interceptor to handle the global errors and format data consistenly.

---------------------------------------------------------------------------------
