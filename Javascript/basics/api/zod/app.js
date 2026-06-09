import * as z from "zod"; 
import {getValidatedUsers} from "./userService.js"

export async function loadUserInterface() {
    try{
         const users = await getValidatedUsers();
    console.log(`Total Users are : ${users.length}`)
    users.forEach(user => (console.log(`- ${user.name} (${user.email})`)));
}catch(error){
    if(error instanceof z.ZodError){
        console.log(`Alert Engineer Team !! The API is broken : ${error.errors}`)
    }
    else{
        console.log(`${error.message}`)
    }
}
}

loadUserInterface()