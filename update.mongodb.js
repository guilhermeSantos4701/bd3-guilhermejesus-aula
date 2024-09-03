const database = 'BD3-GUILHERMEJESUS-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].updateOne(
    {titulo:'As Cavernas de Aço'},
    {$set:{valor:'250'}}
);