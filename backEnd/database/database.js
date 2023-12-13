const pg = require('pg');
const env = require('dotenv').config(); 

const isProduction = process.env.NODE_ENV == 'production';

const connectionString = '';

const Pool = pg.Pool
const pool = new Pool({
    user: `${process.env.DB_USER}`,
    host: `${process.env.DB_HOST}`,
    database: `${process.env.DB_DATABASE}`,
    password: `${process.env.DB_PASSWORD}`,
    port: process.env.DB_PORT,
}) ? isProduction : process.env.DATABASE;

module.exports = { pool };