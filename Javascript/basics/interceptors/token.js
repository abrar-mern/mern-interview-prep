const originalFetch = window.fetch;

const token = 'sha256'

window.fetch = async function (...args){
    if(!args[1]){
        args[1] = {}
    }
    if(!args[1].headers){
        args[1].headers = {}
    }
    args[1].headers.Authorization = `Bearer ${token}`
    console.log('Modifed args', args);
    return originalFetch(...args)
}

fetch("https://httpbin.org/headers")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))