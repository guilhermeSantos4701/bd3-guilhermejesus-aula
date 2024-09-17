const database = 'BD3-GUILHERMEJESUS-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].updateMany(
    {autor:'J.R.R Tolkien'},
    {$set:{autor:'John Ronald Reuel Tolkien'}}
);