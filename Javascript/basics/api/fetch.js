// fetch('https://json-placeholder.mock.beeceptor.com/users')
// .then(response => {
//     if(!response.ok){
//         throw new Error("Network Error");
//     }
//     return response.json()
// })
// .then(user => {
//     user.forEach(names => {
//         console.log(names.email)
//     })
// })
// .catch(err => {
//     console.log('Error',err)
// })

// ==================================================
// Using async and await 
// ==================================================

async function fetchEmail(){
    try{
        const response = await fetch('https://json-placeholder.mock.beeceptor.com/users');
        if(!response.ok){
        throw new Error('Network Error')
        }
        const users = await response.json()
        users.forEach(names => {
            console.log(`Email for user ${names.name} are ${names.email}`)
        })
    }catch(err){
        console.log(Error,err)
    }
    
}

fetchEmail()