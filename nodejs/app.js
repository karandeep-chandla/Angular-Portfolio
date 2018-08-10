// JavaScript Document

var http = require('http');
console.log('start');
http.createServer (function (request, response){
	response.writeHead (200, {'Content-Type' : 'text/plain'});
	response.end('Tech Learning first Node App');	
}).listen(3000);
console.log('App is running http://localhost:3000');


