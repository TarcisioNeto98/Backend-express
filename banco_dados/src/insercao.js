const {Pool} = require('pg');

var banco = new Pool({connectionString: 'postgres://postgres:neto1998@localhost:5432/escola'});
var texto = 'INSERT INTO teste.aluno VALUES ($1, $2, $3)';
var valores = [25, 'Tarcisio Neto', 4];

var consulta = {text: 'INSERT INTO teste.aluno VALUES ($1, $2, $3)',
                values: [14, 'Dragon Ball Z', 1]
}

/*banco.query(consulta, function(erro, result){
    if(erro){
        return console.error(erro.stack);
    }
});*/

//banco.query(consulta).then(res => console.log(res.rows[0])).catch(e => console.error(e.stack));

/*banco.query('SELECT * FROM teste.aluno', function(erro, result){
    var i = 0;
    if(erro) return console.log(erro.stack);
    while(i != result.rows.length){
        console.log(result.rows[i].nome_aluno);
        i++;
    }
});*/

var nome = ['Tarcisio Neto'];

banco.query('SELECT * FROM teste.aluno WHERE nome_aluno = $1', nome, function(err, res){
    (err) ? console.error(err.stack) : console.log(res.rows);
});

banco.end();