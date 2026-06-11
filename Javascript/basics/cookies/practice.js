const cookie = document.cookie = 'name=khan;expires=Thursay 11 June 2026 UTC'
// console.log(cookie)

function createCookie(name,value,daystoexpire){
  const date = new Date();
  date.setTime(date.getTime() + (daystoexpire * 24 * 60 * 60 * 1000));
  const expiry = `expires= ${date.toUTCString()}`
  document.cookie = `${name}=${value};${expiry}`
}
createCookie('laptop','Macbook',3)

function deleteCookie(name){
  const looseWatch = new Date();
  looseWatch.setTime(0);
  document.cookie= `${name}=;expires=${looseWatch.toUTCString()}`
}
// deleteCookie('laptop');

function fetchCookie(key){
  const cookieName =  `${key}=`;
  // console.log(cookieName)
  const cookieArray = document.cookie.split(';');
  // console.log(cookieArray);
  for(let i=0; i<cookieArray.length;i++){
    const cookie = cookieArray[i]
    // console.log(cookie)
    const cookietrim = cookie.trim()
    // console.log(cookietrim)
    if(cookietrim.indexOf(cookieName) == 0){
      return cookietrim.substring(cookieName.length,cookietrim.length)
    }
  }
   return null;
  
}
console.log(fetchCookie('laptop'))

// Event Listener

const firstName = document.querySelector('#firstText');
const lastName = document.querySelector('#lastText');
const submitBtn = document.querySelector('#submitbtn');
const cookieBtn = document.querySelector('#cookiebtn');

submitBtn.addEventListener('click',()=>{
  createCookie('firstName',firstName.value,2)
  console.log('hi')
  createCookie('lastName',lastName.value,2)
})

cookieBtn.addEventListener('click', ()=> {
  firstName.value = fetchCookie("firstName")
  lastName.value = fetchCookie("lastName")
})



// submitBtn.addEventListener('click', () => {
//     setCookie("firstName",firstName.value,2)
//     setCookie("lastName",lastName.value,2)
// });

// cookieBtn.addEventListener('click', () => {
//     firstName.value = getCookie("firstName")
//     lastName.value = getCookie("lastName")
// });

