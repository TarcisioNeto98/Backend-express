const {Pool} = require('pg');

var banco = new Pool({connectionString:'postgres://postgres:neto1998@localhost:5432/escola'});
var texto = 'DELETE FROM teste.aluno WHERE nome_aluno = $1';
var valor = ['Tarcisio Neto'];

banco.query(texto, valor, (err, res) => {
    (err) ? console.error(err.stack) : console.log(res.rows);
});

banco.query('SELECT *FROM teste.aluno').then(res => console.log(res.rows)).catch(e => console.error(e.stack));