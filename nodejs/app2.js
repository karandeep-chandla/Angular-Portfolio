// JavaScript Document

var fs = require('fs');
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('Program End');


fs.readFile('input.txt',
function(erray, date){
	if(erray) return console.log (erray);
	else {
		console.log (date.toString());
	}
});


//http://angular.io/guide/quickstart

//npm install -g @angular/cli

//ng new demo

//cd demo

//ng serve -o (for open)

//ng serve --por 9000