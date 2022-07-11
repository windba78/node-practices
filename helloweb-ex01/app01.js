var http = require('http');

var port = 9090;
var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('<h1>Hello World</h1>');
});

server.listen(port, function () {
  console.log("http server running on " + port);
});