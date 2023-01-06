//const http = require("http");
//const routes=require('./routes.js');

const express = require('express');
const bodyParser=require('body-parser');

//console.log(routes.text);


const app=express();

app.use(bodyParser.urlencoded({extended:false}));


app.use('/add-product',(req,res,next)=>{
    console.log("in the middleware");
    res.send('<form action ="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add product</button>');

});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req,res,next)=>{
    console.log("in the another middleware");
    res.send(`<h1>Hello From Express</h1>`);
});
//const server = http.createServer(app);

app.listen(3000);