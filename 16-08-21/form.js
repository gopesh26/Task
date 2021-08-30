const express = require('express');
const path = require('path');
const fs = require("fs");
const mysql = require('mysql');
const bodyParser = require('body-parser');



const app = express();
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
  res.render('dyno')

})
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mayank",
    database: "mydb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "CREATE TABLE customers (id INT, name VARCHAR(255), email VARCHAR(255), mobile VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });

  });


app.post('/dyno', (req, res)=>{
    console.log(req.body);
    var datawhole = JSON.stringify(req.body);
    var sql = `INSERT INTO students (id, name, email, mobile) VALUES ('${req.body.id}', '${req.body.name}', '${req.body.email}', '${req.body.mobile}')`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

    let data = [];
    data.push(req.body.name);
    data.push(req.body.email);
    data.push(req.body.id);
    data.push(req.body.mobile);


    res.render('dyno.ejs',{data});
    // res.send(req.body);
    fs.appendFileSync('./datadyno.txt', datawhole);
});
app.listen(3000);
console.log("check at http://localhost:3000");
