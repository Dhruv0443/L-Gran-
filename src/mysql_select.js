var mysqlobj = require('mysql');

var con = mysqlobj.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookingdatabase'
});

con.connect(function(err){
    if(err)
        throw err;

    console.log('Database Connected');
});