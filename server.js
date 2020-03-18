var http = require('http'); // 1 - Import Node.js core module
var express = require('express');

var app = express()
app.use(express.static('Assets'))
app.get('/', function(req , res){
    console.log('conecctionmade')
    res.sendFile(__dirname+'/index.html');
})

app.get('/subjects', function(req , res){
    console.log('conecctionmade')
    res.sendFile(__dirname+"/subjects.html");
})

    //handle incomming requests here..



var server = app.listen(5000,function(){console.log('connectionmade')})


//testing
console.log('Node.js web server at port 5000 is running..')