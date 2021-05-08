const mysql = require('mysql');
require('dotenv').config();

//creating the mysql connection using envirionment variables 
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3301
    port: 3301,

    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

});

//establishing connection to the database
connection.connect((err) => {
    if (err) throw err;
})

module.exports = connection;
