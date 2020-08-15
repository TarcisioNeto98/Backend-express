var banco = require('pg');
var express = require('express');
var app = express();

var conString = process.env.URL;

banco = new banco.Pool({connectionString: conString});

app.get('/', function(req, res){
    banco.query('SELECT nome_aluno FROM teste.aluno', (err, result) => {
        if(err) return console.error('erro ', err);
        res.send(result.rows);
    });
});

app.listen(3000);
