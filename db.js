// var db = require('mysql2');
// var con = db.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Dikshant@2003',
//     database: 'hotel_db'
// });

// con.connect(function (err) {
//     if (err) throw err;
// });

// module.exports = con;

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "final",
});

const promisePool = pool.promise();

module.exports = promisePool;
