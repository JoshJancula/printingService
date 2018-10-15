'use strict';
// Dependencies
const path = require('path');
const express = require('express');
const http = require('http');
const app = express();

// Set up app to use body parser for json encoding on POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });

  require("./routes/labelTest")(app);

// App start up
http.createServer(app).listen(8080);
console.log('---------------------------------------------------');
console.log('Sebrio Label Printing Service Listening on: ' + '8080');
console.log('---------------------------------------------------');

module.exports = app;