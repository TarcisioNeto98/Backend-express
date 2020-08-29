var express = require('express');

var app = express();

var mostrar_log = function(req, res, next){
    console.log("mostrar log");
    next();
}

var mostrar_logado = function(){
    console.log("mostrar logado");
}

app.use(mostrar_log);
app.use(mostrar_logado);

app.get('/', function(req, res){
    res.send("Hello World");
});

app.listen(3001, function(){
    console.log("Servidors okhh");
});