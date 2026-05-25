1.) What is Local Storage and Session Storage ?
Answer - 
a.) Local Storage and Session Storage are two ways of storing data using key value pairs in the web browsers.
b.) Local Storage is same as Session Storage but it persists the data even after the browser is closed, re-opened or reload.
c.) Both provide same methods : - 

1.) setItem(key,value) - Store key/value pair
2.) getItem(key) - Get the value of the key
3.) removeItem(key) - Remove the key with the specific items
4.) clear - Remove all the items
5.) key(index) - Get the key of the given position
6.) length - Number of stored items

-------------------------------------------------------------------------------------------

2.) What is the difference between indexdb and session storage ?
Answer - Indexdb
a.) It is used to store large amount of structured data
b.) It uses object orientted storage model
c.) It persists data beyond the duration of the page sesssion

Session Storage - 
a.)It have limited storage around 5mb of data
b.) It stores the data in simple key-value pairs and stores only strings
c.) Available only the duration of the page session.

-------------------------------------------------------------------------------------------