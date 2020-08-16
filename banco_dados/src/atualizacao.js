const {Pool} = require('pg');

var banco = new Pool({connectionString: 'postgres://postgres:neto1998@localhost:5432/escola'});
var texto = 'UPDATE teste.aluno SET nome_aluno = $1 WHERE cod_turma = 1', valor = ['saint seiya'];

banco.query(texto, valor, (err, res) => {
    (err) ? console.error(err.stack) : console.log(res.rows);
});

banco.query('SELECT * FROM teste.aluno', (e, res) => {
    e ? console.error(e.stack) : console.log(res.rows);
});