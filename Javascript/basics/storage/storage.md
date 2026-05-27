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

3.) I create a local storage and closed the browser and reopened it will local storage data persists ?
Answer - Yes local storage data persists even after the browser is closed, reopened or reload 

-------------------------------------------------------------------------------------------

4.) I want to access local storage on another tab with the same browser is it possible ?
Answer - Yes you can access local storage in another tab it is possible.

-------------------------------------------------------------------------------------------

5.) I reloaded the page after creating local storage will the data persist ?
Answer - Yes in local storage the data still persist even after the we reload it 

-------------------------------------------------------------------------------------------

6.) If i open multiple tabs with same url how local storage behaves ?
Answer - I can access local storage on multiple tabs if the url is same

-------------------------------------------------------------------------------------------

7.) If i open multiple windows with same url how local storage behaves ?
Answer - Yes we can still acess the local storage if we are using multiple windows with the same url

-------------------------------------------------------------------------------------------

8.) When will the local storage will be deleted ?
Answer - It remains undefinitely it will get deleted only user deletes it manually

-------------------------------------------------------------------------------------------

9.) Is Local Storage is synchornous or asynchronous ?
Answer - Local storage is synchornous operations if I perform operation on local storage it blocks the execution of the js code until the current operation is completed.

-------------------------------------------------------------------------------------------

10.) I want asynchornous operation and lareg data set to stored what are your suggestions ?
Answer - I can go with the indexdb where asynchronous operations are supported and we can work with large data sets

-------------------------------------------------------------------------------------------

11.) What is the max storage for the localstorage ?
Answer - The max storage of local storage is 5mb.

-------------------------------------------------------------------------------------------

12.) I will try to store lets say an image of size more than 5mb of local storage what happens?
Answer - It will throw QuotaExceedException if it exceeds the limit

-------------------------------------------------------------------------------------------

13.) What if I turn off my laptop and reopen the browser will local storage data persists ?
Answer - Yes as local storage does not have an expiry time until the user manually deletes it the data persists even after it is reload, reopened and closed.

-------------------------------------------------------------------------------------------

Note : - Local storage follows the same origin policy
a.) Protocol - http or https
b.) Host - Domain i.e paytm.com / amazon.com
c.) Port - 8080/8081

-------------------------------------------------------------------------------------------

14.) I create a session storage and close the browser and re-opened it and restored tab. Will session data persists ?
Answer - No session storage does not persist if I close the browser or reopen it.

-------------------------------------------------------------------------------------------

15.) Can I acess the session storage in another tab on the same browser ?
Answer - No you cannot acess the session storage in a nother tab of the same browser

-------------------------------------------------------------------------------------------

16.) I reloaded the page after creating session storage will the data persit?
Answer - Yes session storage data persist even after the page relaod.

-------------------------------------------------------------------------------------------

17.)If I open multiple tabs with same url how session storage behaves ?
Answer - We cannot acess session storage in multiple tabs even if the same url

-------------------------------------------------------------------------------------------

18.) When session storage data will be removed ?
Answer - Once tab is closed or session expires then session storage will be deleted

-------------------------------------------------------------------------------------------

19.) Is session storage synchronous or asynchronous ?
Answer - Session storage is synchronous because it blocks the execution of the code until the current program is executed.

-------------------------------------------------------------------------------------------

20.) I want asynchronous operation and large data sets to be stored then what will you suggest ?
Answer - I can go with indexdb where asynchornous operations are supported and we can go with large data sets

-------------------------------------------------------------------------------------------

21.) What is the max storage of session storage ?
Answer - The max storage of session storage is 5mb.

-------------------------------------------------------------------------------------------

22.) I will try to store lets say an an image which is around 5mb in localstorage then what happens ?
Answer - It will throw QuotaExceedException if it exceeds the limit.

-------------------------------------------------------------------------------------------