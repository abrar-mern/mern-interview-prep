import { apiClient } from "./apiconfig.js";

export async function fetchRawData(){
    return await apiClient('/users')
}

export async function getEmailDirectory(){
    const users = await fetchRawData();
    return (users.map(user =>{
        return {
            id : user.id,
            name : user.name,
            email : user.email.toLowerCase().trim()
        }
    }))
}