//imports
import knex from 'knex';
import { resolve } from 'path';

//config
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

//export
export default db;