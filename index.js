'use strict';

var data = "Build Server \n";
var http = require('http');

// http.createServer(function(req,res){
// 	res.writeHead(200);
// 	res.write("Success");
// 	res.end();
// }).listen(8080);

var http = require('http');

http.createServer(function(req,res){
    main();
    res.writeHeader(200,{'Content-Type':'text/plain'}); 
    res.end(data);
}).listen(8080,'127.0.0.1'); 

function main(){
	var emitter  = require('events');
	var eventsConfig = require('./config');;
	var Hotel = require('./mdl.js');

	var myHotel = new Hotel("Hilton");

	myHotel.on(eventsConfig.update,function(){
	    console.log("Hotel name:" + myHotel.name);
	    console.log("Hotel rank:" + myHotel.rank);
	});

	myHotel.on(eventsConfig.update,function(){
	    data += "Hotel name:" + myHotel.name + "\n";
	    data += "Hotel rank:" + myHotel.rank + "\n";
	});

	myHotel.addStar(2);
	myHotel.reduceStar(1);
	myHotel.reduceStar(3);
}