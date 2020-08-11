var express = require('express');

var Area = require('./area');

var app = express();

app.get('/sobre', function(req, res){
    res.end("Hello World " + Area.area(2));
});

app.get('/', function(req, res){
    res.end("Hello World " + Area.area(3));
});

app.listen(3000, function(){
    console.log("O servidor está rodando. ");
});