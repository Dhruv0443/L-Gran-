var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var cors = require('cors');
var db = require("./Db_connect"); //including db connection to connect databsevar
app = express();
app.use(cors());
app.use(session({ secret: "DGEF#2543" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",function(req,res){
    res.send("hello welcome to rest api");
});//text 
app.get("/listuser",(req,res)=>{
    res.send({name:"dev",cls:"becse",city:"ambala"});

});
app.get("/signup_user",(req,res)=>{
     db.query("select * from emp;", function (err, result) {
      if (err) throw err;
      res.render("signup_user", { result: result });
    });

});
app.post("/signup_user",(req,res)=>{
    console.log(req.body);
    res.send({msg:"request received, check rest-api"});
   
})
//json
//get,post,put,delete - http protocol method
// get to fetch, post to submit put to update delete to delete record
// post se update if ultiple time toh baar baar hogi but put identifies wether same or differ

app.get("/menu", (req, res) => {
  const query = "SELECT * FROM city";
  db.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching data from MySQL: " + error.stack);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
});

// Similar API endpoints for "thali," "sweet," and "rice" tables
app.get('/menu', (req, res) => {
  const query = 'SELECT * FROM state';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching data from MySQL: ' + error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/menu', (req, res) => {
  const query = 'SELECT * FROM aboutus';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching data from MySQL: ' + error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/menu', (req, res) => {
  const query = 'SELECT * FROM department';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching data from MySQL: ' + error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(8080, ()=>console.log("server running at 8080"));