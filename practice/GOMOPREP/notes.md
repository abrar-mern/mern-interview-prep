1.) Tell me about your project ?
Answer - My major full stack project is roled based learning management system built on reactjs, nodejs , express js and mongodb. It contains 3 primary roles that is teachers, students and adminstrators.

Students can register, verify the account explore more courses, buy courses and track the learning progress.
Teachers can create courses, update the courses organize them inton section and subsection, upload video and view course level insights.

On the frontend I have used Redux toolkit for application state and tailwind css for responsive UI in the backend I have used routes, controllers, middlewares, and data models. The Rest API is used for connecting the frontned to the express server.

Authentication is used via role based authentication, jwt based session and in mongodb we used to store users, courses, categories, and course completion whereas the images are stored in the cloud rather than directly being stored in the database.

The most important part of the project was to undestand the complete flow of the project from User Interface to API validations, database updation, payment confirmation and authenticate role based access

---------------------------------------------------------

2.) Can you explain the complete login flow ?
Answer - In the logina pplication I have 2 input fields email address and pasword when user enters tbhe fields it will send it to the backend and the backend will check the requested data. If email address is found then it will check the password that we have stored in the form of hashed password using bcrypt. If the password matches then it will generate a jwt token. 
The token is sent to the backend where in the it will authenicate using middleware and verify the token and attach a decoded user object and authorization will check the user role before giving acess to any resources.

---------------------------------------------------------

3.) Difference between authentication and authorization ?
Answer - Authentication means who the user is and authorization means what the authenicated user are allowed to

---------------------------------------------------------

4.) Where will you store the JWT ?
Answer -  I would prefer using secure HTTPS same site cookies as it cannot access the client side as it recuces the token theft using an XSS attack.
As no approach is safer so we are using http same site cookies and we for same site cookied we can use CSRF protection

---------------------------------------------------------

5.) How did you implement the role based control ?
Answer - Each user have a role like Student, Instructor and Admin.
Authentication middleare first verifies the user and attach the decoded user object and then authorization check the user have access to the specific reosurces.

----------------------------------------------------------

6.) How are passwords stored ?
Answer - Passwords are never stored in the form of plain text so we store the password using hashed so hashed password are stored in the database when user logins bcrypt compare it does compares and then convert the lain text to hased and vice versa.

----------------------------------------------------------

7.) How does the OTP verification flow works ?/
Answer - When users submits the registeration form, the backend generated an OTP and sent it to the registered email adress.
The OTP was stored the temporily within an expiration time. When user submits the OTP T

----------------------------------------------------------

8.) Can you explain the LMS database design ?
Answer - The main entities in the LMS are
1.) User
2.) Profile
3.) Courses
4.) Section
5.) Subsection
6.) Course Progress
7.) Ratings and Review
8.) Tags
9.) OTP

A Course belong to the instructor and the category whereeas the courses include multiple sections and subsections the subsections unclude titel, description and the repective lessons for it. Students can enroll to the courses and track the progress of the courses 

----------------------------------------------------------

9.) Why did you create multiple sections and subsections ?
Answer - 