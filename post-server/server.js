// Require/Import the HTTP module
const http = require('http');
const fs = require('fs');

// Define a PORT to listen for incoming request
const PORT = 8080;

// Create Generic function to handle requests and responds
const handleRequest = ( req, res ) =>{ 

    const path = req.url
    console.log(path)
    if(path === '/thanks'){

        // When the server receives data
        req.on('data', (data) => {
            console.log(data);

            // When the request has ended...
            req.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data)
            })
        })
    }else{
         // Read HTML file then pass the data to the server (browser)
        fs.readFile(`${__dirname}/index.html`, (err, data) => {
            if(err) throw err;
            res.end(data);
        })
    }
}


// Create Server
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
})