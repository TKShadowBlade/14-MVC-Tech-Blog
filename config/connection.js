const Connection = require('sequelize');
require('dotenv').config();
let connection;
if (process.env.JAWSDB_URL) {
    connection = new Connection(process.env.JAWSDB_URL);
} else {
    connection = new Connection(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = Connection;