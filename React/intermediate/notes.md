1.) What is react router ?
Answer - React Router is a library that is used to create navigation between different pages in a React application without reloading the complete website.

---------------------------------------------------------------------------------------

2.) How to create nested router?
Answer - We can wrap the Route tag and inside that add another Route
<Routes>
    <Route path = "/" element = {<Home/>} >
        <<Route path = "/services" element = {<Services/>} />
    </Route>
</Routes>