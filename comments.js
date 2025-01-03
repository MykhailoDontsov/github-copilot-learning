// Create web server
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // Load HTML file
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Error: 404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});