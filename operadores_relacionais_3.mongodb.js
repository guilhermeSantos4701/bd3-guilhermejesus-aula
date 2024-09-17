/* NOME DO BANCO DE DADOS */
const database = 'BD3-GUILHERMEJESUS-AULA';

/* NOME DO BANCO DA COLEÇÃO DE DADOS */
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR BANCO DE DADOS: */
use(database);

/* SELECIONA UM LIVRO DE UMA CATEGORIA E UM VALOR DETERMINADO */
db[collection].find({

    $and:[
        {categoria:{$eq:'Fantasia Heroica'}},
        {valor:{$lte:100}}
    ]

})