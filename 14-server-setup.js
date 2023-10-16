const http = require('http');

const server = http.createServer((req,res)=>{
console.log(req);
if(req.url === '/'){
 res.end('welcome to our server')
 return;
}
if(req.url === '/about'){
 res.end('Here is our History')
 return;
}
 res.end(`
 <h1>Oops!</h1>
 <p>We can't seem to find this page you are looking for </p>
 <button class="btn btn-" href='/'>back</button>
 `)
})

server.listen(8000)