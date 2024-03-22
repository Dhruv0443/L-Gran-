var mysqlobj = require("mysql");
var con = mysqlobj.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "project",
});
con.connect(function (err) {
  if (err) throw err;
});
module.exports = con;
