var connect = require('connect');
var serveStatic = require('serve-static');

var port = 9090;
var app = connect();

app.use(serveStatic(__dirname + "/public"));

app.listen(port, function () {
  console.log("http server running on " + port);
});