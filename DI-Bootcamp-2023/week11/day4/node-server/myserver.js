
//ex1
const http= require('http')
const server= http.createServer((req,res)=>{
console.log(req.url, req.method);
res.setHeader('Content-Type', 'text/html')
res.write('hello')
res.write('<h1>this is my first respone </h1>')
res.write('<h2>this is my second response</h2>')
res.write('<h3>this is my third response</h3>')
res.end();

})

server.listen(3000, 'localhost',()=>{
    console.log('port 3000')
})


