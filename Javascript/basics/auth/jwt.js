const http = require('http');
const crypto = require('crypto');

const SECRET_KEY = "abrar-khan";

// --- UTILITY FUNCTIONS ---

// 1. Base64Url Encode (Removes +, /, and =)
const base64UrlEncode = (obj) => {
    const str = JSON.stringify(obj);
    return Buffer.from(str)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
};

// 2. Base64Url Decode
const base64UrlDecode = (str) => Buffer.from(str, 'base64').toString();

// 3. Create HMAC SHA256 Signature
const createSignature = (header, payload, secret) => {
    return crypto
        .createHmac('sha256', secret)
        .update(`${header}.${payload}`)
        .digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
};

// --- GENERATOR (Run this to get your Postman token) ---
const header = { alg: "HS256", typ: "JWT" };
const payload = { 
    username: "Abrar", 
    role: "developer",
    exp: Math.floor(Date.now() / 1000) + 3600 // Expires in 1 hour
};

const encodedHeader = base64UrlEncode(header);
const encodedPayload = base64UrlEncode(payload);
const signatureGenerated = createSignature(encodedHeader, encodedPayload, SECRET_KEY);

const myToken = `${encodedHeader}.${encodedPayload}.${signatureGenerated}`;

console.log("--------------------------------------------------");
console.log("COPY THIS TOKEN FOR POSTMAN:");
console.log(myToken);
console.log("--------------------------------------------------");


// --- THE SERVER ---
const server = http.createServer((req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.writeHead(401);
        return res.end("No token provided");
    }

    const parts = token.split('.');
    if (parts.length !== 3) {
        res.writeHead(400);
        return res.end("Invalid Token Format");
    }

    const [headerB64, payloadB64, signatureFromClient] = parts;

    // Verify Signature
    const expectedSignature = createSignature(headerB64, payloadB64, SECRET_KEY);

    if (signatureFromClient !== expectedSignature) {
        console.log("Mismatch detected!");
        console.log("Client sent:", signatureFromClient);
        console.log("Expected:   ", expectedSignature);
        res.writeHead(403);
        return res.end("Invalid Signature!");
    }

    // Decode Payload and Check Expiry
    const decodedPayload = JSON.parse(base64UrlDecode(payloadB64));
    
    if (decodedPayload.exp && Date.now() >= decodedPayload.exp * 1000) {
        res.writeHead(401);
        return res.end("Token has expired");
    }

    // Success
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
        status: "Success", 
        message: "Welcome Abrar! You are authorized.",
        data: decodedPayload 
    }));
});

server.listen(3000, () => {
    console.log("Server is live on http://localhost:3000");
});