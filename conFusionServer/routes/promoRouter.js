const express =require("express");
const bodyParser =require("body-parser");
const promoRouter =express.Router();

promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the promotions to you!');
})
.post((req,res,next)=>{
    res.end('Will add promotion :'+req.body.name+'And details :'+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put operation not supported');
})
.delete((req,res,next)=>{
    res.end("Deleting all promotions for you !");
});


promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next)=>{
    res.end("Will send promotion"+req.params.promoId+" to you!");
})
.post((req,res,next)=>{
    res.end('Will add promotion :'+req.body.name+'And details :'+req.body.description+ 'of promotion'+req.params.promoId);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put operation not supported on /promotions/'+req.params.promoId);
})
.delete((req,res,next)=>{
    res.end("Deleting promotion"+req.params.promoId+" for you !");
});
module.exports=promoRouter;
