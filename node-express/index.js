const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const { parse } = require('path');
const hostname = "localhost";
const port = 3000;
const dishRouter=require('./routes/dishRouter');

const app = express();
app.use('/dishes',dishRouter);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

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