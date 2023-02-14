const http = require('http');
const dt = require('./myfile');
const uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(uc.upperCase('Hello World!') + dt.mydatetime());
  console.log(`server loading...`);
}).listen(8080);