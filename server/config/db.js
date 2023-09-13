const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, // Default PostgreSQL port
});

//   pool.connect()
//   .then(() => console.log('Connected to PostgreSQL'))
//   .catch((err) => console.error('Error connecting to PostgreSQL:', err));

module.exports = pool