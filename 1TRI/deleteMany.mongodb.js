const database = 'BD3-GUILHERMEJESUS-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].deleteMany(
    {autor:'Isaac Asimov'}
);
