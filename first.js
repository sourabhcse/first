//const http = require("http");
//const routes=require('./routes.js');

const express = require('express');

//console.log(routes.text);

const app=express();

app.use((req,res,next)=>{
    console.log("in the middleware");
    next();

});

app.use((req,res,next)=>{
    console.log("in the another middleware");
    res.send(`<h1>Hello From Express</h1>`);
    res.send({key1:"hello"});
});
//const server = http.createServer(app);

app.listen(3000);