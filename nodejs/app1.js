// JavaScript Document

var http = require('http');
console.log('start');
http.createServer (function (request, response){
	response.writeHead (200, {'Content-Type' : 'text/html'});
	response.end('<h1>Tech Learning first Node App</h1>');	
}).listen(3000);
console.log('App is running http://localhost:3000');