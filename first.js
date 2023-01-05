const http = require("http");
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data' ,(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFileSync('message.text',message);
        
        
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
        });

    }
    res.setHeader('Content-Type','text/html');
    res.write('<html><body><h1>welcome to first node.js program</h1></body></html>');
    res.end();
});

server.listen(4000);

 