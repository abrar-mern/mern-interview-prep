const http = require('http');
const crypto = require('crypto');
const SECRET_KEY = 'abrar-khan'

// encode base64url

const base64urlencode = (obj) => {
    const str = JSON.stringify(obj);
    return Buffer.from(str)
    .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

// decode base64url

const base64urldecode = (str) => {
    const replacesStr = str
     .replace(/-/g, '+') 

        .replace(/_/g, '/');
    
    const buffer = Buffer.from(replacesStr,'base64');
    const jsonString = buffer.toString('utf-8')
    return JSON.parse(jsonString)
}

// createSignature

const createSignature = (header,payload,secret) => {
    const sign = `${header}.${payload}`
    const signature = crypto
    .createHmac('sha256',secret)
    .update(sign)
    .digest('base64')
    .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    
    return signature
}

const header = {
    type : "JWT",
    alg : "HS256"
}

const payload = {
    name : "Abrar Khan",
    role : "Developer",
    exp : Math.floor(Date.now()/1000) + 3600
}

const encodedHeader = base64urlencode(header);
const encodedPayload = base64urlencode(payload);
const encodedSignature = createSignature(encodedHeader,encodedPayload,SECRET_KEY);

const myToken = `${encodedHeader}.${encodedPayload}.${encodedSignature}`
console.log(myToken);


// --- THE SERVER ---
const server = http.createServer((req,res) => {
    const auth = req.headers['authorization'];
    const token = auth && auth.split(' ')[1];
    
    // Check if token is there
    if (!token){
        res.writeHead(401);
        return res.end('Unauthorized access')
    }
    
    // Check length of token
    const parts = token.split('.');
    if(parts.length!==3){
        res.writeHead(400)
        return res.end('Invalid token')
    }
    
    // Verify Signature
    const [headerb64,payloadb64,signature] = parts;
    const verifySign = createSignature(headerb64,payloadb64,SECRET_KEY)
    if(verifySign !== signature){
        res.writeHead(403)
        return res.end('Invalid Signature')
    }
    
    // Decode Payload
    const decodepayload = base64urldecode(payloadb64);
    
    // check expiry
    if (decodepayload.exp && Date.now() >= decodepayload.exp * 1000){
        res.writeHead(401)
        return res.end('Token has expired')
    }
    
    // success message
  res.writeHead(200,{'Content-type':'application/json'})
  res.end(JSON.stringify({
      sucess : "Success",
      message : `Welcome ${decodepayload.name}! You are authorized`,
      data : decodepayload  
}))
});

server.listen(3000,() => {
    console.log('Server is runnig at port 3000')
})