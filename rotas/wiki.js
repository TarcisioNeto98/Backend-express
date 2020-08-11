var express = require('express');//importo o modulo express criando um objeto, chamado express.
var router = express.Router();//Crio um agrupamento de rotas utilizando o objeto, express.Router.

router.get('/', function(solocitacao, resposta){
    resposta.send("Raiz do site!");
});

router.get('/sobre', function(solicitacao, resposta){
    resposta.send("Pasta sobre!");
});

module.exports = router;