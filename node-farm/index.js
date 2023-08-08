const fs = require('fs');
const http = require('http');
const url = require('url');

//building the server

const data = fs.readFileSync('./dev-data/data.json' , 'utf-8');
const productData = JSON.parse(data);

const server = http.createServer((req,res) => {
    const pathName = req.url;

    if(pathName==='/' || pathName === '/overview') {
        res.end('this is overview:)')
    } 

    else if(pathName === '/product') {
        res.end('product? product.')
    } 

    else if(pathName === '/api') {
        res.writeHead(200, {'content-type' : 'application/json'});
        res.end(data);
    }

    else {
        res.writeHead(404, {
            'content-type' : 'text/html'
        })
        res.end('<h1>page not found?</h1>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening on port 8000");
})