// dannygould.com
// Author: Daniel Gould IV
// All rights reserved

// Dependencies
var express		= require('express');
var app			= express();
var bodyParser		= require('body-parser');

var morgan		= require('morgan');

var server		= require('http').createServer(app);
var port		= process.env.port || 8080;


// express setup

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// routes
app.use(express.static(__dirname + '/public'));

server.listen(port);
console.log("Magic happens on port %s", port);
