// Require/Import the HTTP module
const http = require('http');
const fs = require('fs');

// Define a PORT to listen for incoming request
const PORT = 8080;

// readHTMLFile then Render the Scripts
const readHTMLFile = (name, res) => {
    fs.readFile(`${__dirname}/${name}.html`, (err, data) => {
        if(err) throw err;
        res.end(data);
    })
}

// Create Generic function to handle requests and responds
const handleRequest = ( req, res ) =>{

    // Read HTML file then pass the data to the server (browser)
    const path = req.url;

    // by specifically telling the browser that we are delivering an html file.
    res.writeHead(200, { 'Content-Type': 'text/html' });

    switch(path){
        case '/': 
        return readHTMLFile('index', res)

        case '/coding':
        return readHTMLFile('coding', res)
        default:
            return readHTMLFile('not-found', res);
    }
}

// Create Server
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
})