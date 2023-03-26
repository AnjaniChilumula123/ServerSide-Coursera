const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const { parse } = require('path');
const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(express.static(__dirname+'/public'));
app.all('/dishes',(req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
});
app.get('/dishes',(req,res,next)=>{
    res.end('Will send all the dishes to you!');
});
app.post('/dishes',(req,res,next)=>{
    res.end('Will add dish :'+req.body.name+'And details :'+req.body.description);
});
app.put('/dishes',(req,res,next)=>{
    res.statusCode=403;
    res.end('put operation not supported');
});
app.delete('/dishes',(req,res,next)=>{
    res.end("Deleting all dishes for you !");
});
app.all('/dishes/dishId',(req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
});
app.get('/dishes/dishId',(req,res,next)=>{
    res.end('Will send dish :'+req.params.dishId);
});
app.post('/dishes',(req,res,next)=>{
    res.statusCode=403;
    res.end("post operation is not supported");
});
app.put('/dishes',(req,res,next)=>{
res.end("updating dish"+req.params.dishId);
res.end("will update dish"+req.body.name+"and the details"+req.body.description);
});
app.delete('/dishes',(req,res,next)=>{
    res.end("Deleting dish" +req.params.dishId+"for you !");
});




app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/html");
    res.end("<html><body><h1>This is Express Server</h1></body></html>");
    // this is to git check
});
const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});