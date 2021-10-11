const http = require('http');
const port = 4444;
const fs = require('fs');

const server = http.createServer((req,res)=> {
    console.log(req.url);
    console.log(req.method);

    switch(true){
        case req.url === "/" && req.method === "GET":
            fs.readFile('./index.html', (err,file) => {
                res.setHeader('Content-Type', 'text/html');
                res.end(file);
            });
            break;
            case req.url === "index2" && req.method === "GET":
                fs.readFile('./index2.html', (err,file) => {
                    res.setHeader('Content-Type', 'text/html');
                    res.end(file);
                });
            break;
            case req.url === "index3" && req.method === "GET":
                fs.readFile('./index3.html', (err,file) => {
                    res.setHeader('Content-Type', 'text/html');
                    res.end(file);
                });
            break;
            case req.url === "/alap.css" && req.method === "GET":
            fs.readFile('./alap2.css', (err,file) => {
                res.setHeader('Content-Type', 'text/css');
                res.end(file);
            });
            break;
            case req.url === "/hiba.css" && req.method === "GET":
            fs.readFile('./hiba.css', (err,file) => {
                res.setHeader('Content-Type', 'text/css');
                res.end(file);
            });
            break;
        default:
            fs.readFile('./hiba404.html', (err,file) => {
                res.setHeader('Content-Type', 'text/html');
                res.end(file);
            });

    }
})

server.listen(port);