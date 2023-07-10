const express= require('express')
const app=express();
app.get('/',(req,res)=>{
console.log(req.method)
const htmlContent='<h1> hello there</h1><h2> How you doing my friend</h2>'
res.setHeader('Content-Type', 'text/html')
res.send(htmlContent)
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
