const database = 'BD3-GUILHERMEJESUS-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].find(
                        {"categoria":"Ficção Científica"},
                        {"_id":0, "codigo":0}
                    );
