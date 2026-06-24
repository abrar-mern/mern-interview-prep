1.) What is an event loop ?
Answer - Javascript event loop is responsible for managing the execution of the code, collecting and processing events and executing queued tasks.
As javascript is a synchronous single threaded programming language means it exeucted the code line by line and one at atime.
So event loop ensures everything is executed in the correct order   

-----------------------------------------------------------------------

2.) What is callback queue/ macrotask queue?
Answer - Its job is to maintain all the callbacks function that need to be executed.

-----------------------------------------------------------------------


3.) What are microtask queue ?
Answer - When    with promises we have to deal with micro task
When the promises is resolved, rejected using .then() and catch() block callbacks are added to microqueue.
It is given higher priority than callback/ macrotask queue 

-----------------------------------------------------------------------