var http = require('http'); // 1 - Import Node.js core module
var express = require('express');

var app = express()
app.use(express.static('Assets'))
app.get('/', function(req , res){
    console.log('conecctionmade')
    res.sendFile('C:\\Users\\User\\Desktop\\TEST\\index.html');
})



    //handle incomming requests here..



var server = app.listen(5000,function(){console.log('connectionmade')})



console.log('Node.js web server at port 5000 is running..')