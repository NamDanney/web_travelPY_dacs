const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

console.log('Database Config:', {
    host: dbConfig.host,
    user: dbConfig.user,
    database: dbConfig.database,
    port: dbConfig.port
});

const pool = mysql.createPool(dbConfig);

async function checkConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('MySQL Connection Successful!');
        connection.release();
        return true;
    } catch (error) {
        console.error('MySQL Connection Error:', error);
        return false;
    }
}

module.exports = { pool, checkConnection };