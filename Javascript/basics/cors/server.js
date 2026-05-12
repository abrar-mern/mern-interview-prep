const http = require('http');
const server = http.createServer((req,res) => {
    if(req.method === 'OPTIONS'){
      res.writeHead(204,{
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
        'Access-Control-Allow-Headers': 'content-Type',
      })
      res.end();
      return;
    }
    // Simple Request
    res.writeHead(200,{
        'content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
    });

    // Response End
    res.end(JSON.stringify({
        message : 'Server is running'
    }))

})

server.listen(3000,() =>{
    console.log('Server is running at port 3000')
})