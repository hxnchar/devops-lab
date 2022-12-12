const http = require('http');

const PORT = 80;

http.createServer((req, res) => {
  const path = req.url;

  switch (path) {
    case '/':
      res.writeHead(200);
      res.end('<h1>Welcome to the homepage</h1>');
      break;
    case '/homepage':
      res.writeHead(200);
      res.end('<h1>Welcome to the homepage but via \'/homepage\' route</h1>');
      break;
    case '/another-route':
      res.writeHead(200);
      res.end('<h1>Welcome to another route</h1>');
      break;
    default:
      res.writeHead(404);
      res.end('<h1>This page does not exist</h1>');
      break;
  }
}).listen(PORT);

console.log(`[LOG] Server is running on port ${PORT}`);
