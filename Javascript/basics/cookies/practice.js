// document.cookie = 'name=Abrar;expires = Saturday 30 May 2026 12:0:00 UTC,path=./'


function setCookie(name, value, daystoExpire) {
  const date = new Date();
  date.setTime(date.getTime() + (daystoExpire + 24 * 60 * 60 * 1000));
  const expiry = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value};${expiry}`;
}
setCookie("email", "abc@gmail.com", 2);

// Delete Cookie

function deleteCookie(name) {
  const looseWatch = new Date();
  looseWatch.setTime(0);
  document.cookie = `${name}=;expires=${looseWatch.toUTCString()}`;
}

deleteCookie("email");

// GetCookie
function getCookie(name) {
  const cookieName = name + "=";
  const cookieArray = document.cookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    cookie = cookie.trim();
    if (cookie.indexOf(cookieName)== 0) {
        return cookie.substring(cookieName.length,cookie.length)
    }
  }
  return null;
}


const getCookie1 = getCookie("surname");
console.log(getCookie1)

// Event Listener

const firstName = document.querySelector('#firstText');
const lastName = document.querySelector('#lastText');
const submitBtn = document.querySelector('#submitbtn');
const cookieBtn = document.querySelector('#cookiebtn');

submitBtn.addEventListener('click', () => {
    setCookie("firstName",firstName.value,2)
    setCookie("lastName",lastName.value,2)
});

cookieBtn.addEventListener('click', () => {
    firstName.value = getCookie("firstName")
    lastName.value = getCookie("lastName")
});