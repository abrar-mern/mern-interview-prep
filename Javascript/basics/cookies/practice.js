
// Creating a cookie
function setCookie(name,value,daysToLeave,path){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLeave + 24 * 60 * 60 * 1000));
    const expiry = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value},${expiry},path=${path}`
}

setCookie("city","pune",3,'./')

// Delete a cookie
function deleteCookie(name){
    const looseWatch = new Date();
    looseWatch.setTime(0);
    document.cookie = `${name}=; expires=${looseWatch.toUTCString()}`
}

deleteCookie("city");