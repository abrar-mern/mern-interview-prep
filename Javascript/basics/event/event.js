document.querySelector('#grand-parent')
.addEventListener('click',(e)=> {
 console.log('GrandParent Clicked')   
},true)

document.querySelector('#parent')
.addEventListener('click',(e)=> {
 console.log('parent Clicked')   
},true)

document.querySelector('#child')
.addEventListener('click',(e)=> {
 console.log('child Clicked')  
 event.stopPropagation(); 
},true)