const database = 'BD3-GUILHERMEJESUS-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].find(
                        {"descricao":/robôs/i},
                        {"_id":0, "codigo":0}
                    );
