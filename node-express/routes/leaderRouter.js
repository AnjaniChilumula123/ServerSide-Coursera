const express =require("express");
const bodyParser =require("body-parser");
const leaderRouter =express.Router();

leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the leaders to you!');
})
.post((req,res,next)=>{
    res.end('Will add leaders :'+req.body.name+'And details :'+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put operation not supported');
})
.delete((req,res,next)=>{
    res.end("Deleting all leaders for you !");
});
leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next)=>{
    res.end("Will send leader"+req.params.leaderId+" to you!");
})
.post((req,res,next)=>{
    res.end('Will add leader :'+req.body.name+'And details :'+req.body.description+ 'of dish'+req.params.leaderId);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put operation not supported on /leaders/'+req.params.leaderId);
})
.delete((req,res,next)=>{
    res.end("Deleting dish"+req.params.leaderId+" for you !");
});
module.exports=leaderRouter;
