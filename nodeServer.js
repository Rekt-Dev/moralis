const http = require('http');
const fs = require('fs');

const data = require()
const server = http.createServer((req, res) => 
{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    html = fs.readFileSync('./index.html');
    res.end(html);
}   
);

server.listen('3535');