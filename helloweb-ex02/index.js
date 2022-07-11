var http = require('http');
var path = require('path');
var express = require('express');

var mainRouter = require('./routes/main');
var userRouter = require('./routes/user');

var port = 9090;
// setup application
var application = express()
  // 1. static resources
  .use(express.static(path.join(__dirname, '/assets')))
  // 2.  body parser
  .use(express.urlencoded({ extended: true })) // application/x-www-form-urlencoded
  .use(express.json()) // application/json
  // 3. view engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  // 4. request router
  .use('/', mainRouter)
  .use('/user', userRouter);

// server start
http
  .createServer(application)
  .on('listening', function () {
    console.log('http server running on ' + port);
  })
  .on('error', function (error) {
    console.error(error);
  })
  .listen(port);