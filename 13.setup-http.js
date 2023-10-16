const http = require('http');

const server = http.createServer((req,res)=>{
console.log(req);
 res.write('welcome to our server')
 res.end()
})

server.listen(8000)