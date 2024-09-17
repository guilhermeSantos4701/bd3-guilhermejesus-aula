/* NOME DO BANCO DE DADOS */
const database = 'BD3-GUILHERMEJESUS-AULA';

/* NOME DO BANCO DA COLEÇÃO DE DADOS */
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR BANCO DE DADOS: */
use(database);

/* SELECIONA O LIVRO COM VALOR MAIOR QUE DETERMINADO NÚMERO */
// db[collection].find(
//     {valor:{$gt:100}}
// );

/* SELECIONA O LIVRO COM VALOR MENOR OU IGUAL A DETERMINADO NÚMERO */
db[collection].find(
    {valor:{$lte:100}}
);