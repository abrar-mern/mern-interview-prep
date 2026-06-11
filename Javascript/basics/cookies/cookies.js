document.cookie = 'name=AbrarKhan; expires = Friday 30 May 2026 12:0:00 UTC; path=./'
document.cookie = 'lastName=Babulkidua; expires = Friday 30 May 2026 12:0:00 UTC; path=./'

// const date = new Date();
// console.log(date);
// console.log(typeof date);

createCookie("email","abc@gmail.com",3);

// Create Cookie
function createCookie(name,value,daystoexpire){
    const date = new Date();
    date.setTime(date.getTime() + (daystoexpire * 24 * 60 * 60 * 1000));
    let expiry= "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expiry}`
}

createCookie("gaon","delhi",2);

// Delete Cookie
function deleteCookie(name){
   const looseWatch = new Date();
   looseWatch.setTime(0);
   document.cookie = `${name}=;expires = ${looseWatch.toUTCString()};`
}
deleteCookie("email");

console.log(document.cookie);


// Get Cookie
// getCookie("email")
function getCookie(name){
    const cookieName = name + "=";
    const cookieArray = document.cookie.split(';');
    for (let i=0; i<cookieArray.length;i++){
        let cookie = cookieArray[i];
        cookie = cookie.trim();
        if(cookie.indexOf(cookieName)==0){
            return cookie.substring(cookieName.length,cookie.length)
        }
    }
    return null;
}
console.log("We are invoking our get method here")
console.log(getCookie("name"));
// console.log(document.cookie);