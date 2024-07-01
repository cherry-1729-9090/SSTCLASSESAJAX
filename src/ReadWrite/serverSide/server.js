const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html> <head> <title> My First Page </title> </head> <body>');
    res.write('<h1>Hello World!</h1>');
    res.write('</body></html>');
    res.end();
})


server.listen(3000,'localhost',()=>{
    console.log('Server is running on port 3000');
});