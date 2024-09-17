const database = 'BD3-GUILHERMEJESUS-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].deleteOne(
    {codigo:'9'}
);
