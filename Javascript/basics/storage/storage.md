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
a.) indexdb is used to store large amount of data
b.) It uses object oriented structure model
c.) Persist data beyind the duration of page session