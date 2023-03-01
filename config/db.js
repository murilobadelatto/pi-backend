// const mysql = require('mysql2');
const mysql = require('mysql');
connectionString = process.env.DATABASE_URL 

//console.log(connectionString);

db = {};
db.cnn = {};
db.cnn.exec = function(query, callback){
    // var connection = mysql.createConnection({
    //     host: process.env.HOST,
    //     user: process.env.USER,
    //     password: process.env.PASSWORD,
    //     database: process.env.DATABASE 
    // });
    var connection = mysql.createConnection(connectionString);
    connection.query(query, function(err, rows){
        callback(rows, err);
        connection.end();
    });
};

module.exports = db;