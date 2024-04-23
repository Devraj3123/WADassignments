const http = require('http');
const fs = require('fs');
const path = require('path');


const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/contact': 'contact.html',

};


const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;


    if (routes[req.url]) {
        filePath = routes[req.url];
    }


    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404);
                res.end('404 - Not Found');
            } else {
                // Server error
                res.writeHead(500);
                res.end('500 - Internal Server Error');
            }
        } else {

            res.writeHead(200);
            res.end(content);
        }
    });
});


const PORT = process.env.PORT || 4000;


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
