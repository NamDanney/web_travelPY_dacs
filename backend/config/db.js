// filepath: d:\WEB_TRAVEL\my-app\backend\config\db.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create a Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: 3306, // Thay đổi cổng nếu cần
    dialect: 'mysql',
    logging: false, // Disable logging for cleaner output
});

// Test the connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;