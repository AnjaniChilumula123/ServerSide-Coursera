
const http = require('http');

const port =3000;
const hostname ='localhost';
const fs = require('fs');
const  path = require('path');

const server = http.createServer((req,res)=>{
    console.log("Request for "+req.url+"by method"+req.method);
    if(req.method=='GET')
    {
        var fileurl ;
        if(req.url=='/') fileurl='/index.html'
        else fileurl=req.url;
        var filepath = path.resolve("./public"+fileurl);
        const fileExt=path.extname(filepath);
        if(fileExt=='.html')
        {
            fs.exists(filepath,(exists)=>{
              if(!exists)
              {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end('<html><body><h1>Error 404: ' + fileurl + 
                            ' not found</h1></body></html>');
                return;
              }
            else
              {
                res.statusCode = 200;
               res.setHeader('Content-Type', 'text/html');
               fs.createReadStream(filepath).pipe(res);
               return;
              }
            });
        }
        else
        {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + fileurl + 
                 ' not a html file </h1></body></html>');
                 return;
        }
    }
else {
    res.statusCode =404;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>Error 404: ' + fileurl + 
    ' not supported</h1></body></html>');
    return;
}
})
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})