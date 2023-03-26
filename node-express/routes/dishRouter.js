const express =require("express");
const bodyParser =require("body-parser");
const dishRouter =express.Router();

dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the dishes to you!');
})
.post((req,res,next)=>{
    res.end('Will add dish :'+req.body.name+'And details :'+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put operation not supported');
})
.delete((req,res,next)=>{
    res.end("Deleting all dishes for you !");
});
module.exports=dishRouter;
