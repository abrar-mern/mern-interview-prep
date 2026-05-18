const github_users_api = 'https://api.github.com/users/abrar-mern';
const getUsers = fetch(github_users_api);

// Track the responses using then and catch block
getUsers.then(function(response){
    // Check if it is an network error
    if(!response.ok){
        throw new Error('Network error')
    }
    return response.json()
})
.then(function(data){
console.log("Actual User Data:", data);
    console.log("Username is:", data.name);
})
.catch(function(err){
    console.log(`Check the error: ${err}`)
})