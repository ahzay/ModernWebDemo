// Include necessary Node.js modules
const http = require('http'); // HTTP module to create an HTTP server
const fs = require('fs'); // File System module to read files

// HTTP request handling function
function requestHandler(req, res) {
    // 'req' and 'res' are objects representing the HTTP request and response
    // This function will be executed whenever the server receives a request
    // Check the request method and URL
    if (req.method === 'GET') {
        let filePath = '';
        // Determine the file to serve based on the URL
        if (req.url === '/') {
            filePath = 'index.html';
        } else if (req.url === '/form.js') {
            filePath = 'form.js';
        }

        // Read and serve the appropriate file
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading ' + filePath);
            }
            res.writeHead(200);
            res.end(data); // completes response with data and sends it
        });        
    } else if (req.method === 'POST' && req.url === '/submit-form') {
        // If it's a POST request to '/submit-form', handle the form submission

        let body = '';
        // Collect the data chunks received in the request body
        req.on('data', chunk => {
            body += chunk.toString(); // Convert the chunk from Buffer to string and append
        });

        // Once all data is received
        req.on('end', () => {
            // Parse the received JSON data
            const parsedData = JSON.parse(body); // Convert string to JSON object
            console.log('Received message:', parsedData.message); // Log the message to the console

            // Send a response back to the client
            res.writeHead(200, {'Content-Type': 'text/plain'}); // Set header for plain text response
            res.end('Form submitted successfully'); // Send the response text
        });
    }
}

// Create an HTTP server, it expects a callback function with (req, res) args
const server = http.createServer(requestHandler);

// Define the port number on which the server will listen
const port = 3000;
// Start the server and listen on the specified port
server.listen(port, () => {
    // This arrow function is executed once the server starts listening
    console.log(`Server running at http://localhost:${port}/`); // Log message when server starts
});

// can also do to not use arrow funs
//  // Define a function that will be executed when the server starts
// function onServerStart() {
//     console.log(`Server running at http://localhost:${port}/`);
// }

// server.listen(port, onServerStart);