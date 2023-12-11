const pg = require('pg');


const Pool = pg.Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'G850105!',
    port: 5432,
})

pool.
exports = pool;