const {Pool} = require('pg');

var banco = new Pool({connectionString: process.env.URL});
var texto = 'INSERT INTO teste.aluno VALUES ($1, $2, $3)';
var valores = [51, 'Tarcisio Neto', 1];

banco.query(texto, valores, function(erro, result){
    if(erro){
        return console.error(erro.stack);
    }
});

banco.query('SELECT * FROM teste.aluno', function(erro, result){
    var i = 0;
    if(erro) return console.log(erro.stack);
    while(i != result.rows.length){
        console.log(result.rows[i]);
        i++;
    }
});

banco.end();

