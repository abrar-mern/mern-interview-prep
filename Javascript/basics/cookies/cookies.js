document.cookie = 'name=AbrarKhan; expires = Friday 30 May 2026 12:0:00 UTC; path=./'
document.cookie = 'lastName=Babulkidua; expires = Friday 30 May 2026 12:0:00 UTC; path=./'


// const date = new Date();
// console.log(date);
// console.log(typeof date);

setCookie("email","abc@gmail.com",3);

function setCookie(name,value,daystoexpire){
    const date = new Date();
    date.setTime(date.getTime() + (daystoexpire * 24 * 60 * 60 * 1000));
    let expiry= "expires:" + date.toUTCString();
    document.cookie = `${name}=${value};${expiry}`
}

setCookie("gaon","delhi",2);


function deleteCookie(name){
   const looseWatch = new Date();
   looseWatch.setTime(0);
   document.cookie = `${name}=;expires = ${looseWatch.toUTCString()};`
}
deleteCookie("email");
console.log(document.cookie);



