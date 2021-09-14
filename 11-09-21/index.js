const  express =  require('express');
const app = express();
const cors = require('cors');
var mysql = require('mysql2');


app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
  host: "localhost",
  user: "gopeshyadav",
  password: "gopesh",
  database:"employee"
});


app.post('/create',(req,res)=>{
    const email = req.body.email;
    const pass = req.body.password;
    const city = req.body.city;
    const zip = req.body.zip;

    //db.query("INSERT INTO data (email,password,city,zip) VALUES(?,?,?,?);",[email,pass,city,zip]
    db.query('CALL p1(@id,?,?,?,?)',[email,pass,city,zip]
    ,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("value inserted")
            console.log("value inserted")  
        }
    }
    );
});

app.get('/details',(req,res)=>{
    db.query("SELECT * FROM data;",(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    });
})


app.put('/update',(req,res)=>{
    const id = req.body.id;
    const email = req.body.email ;
db.query('UPDATE data set email=? WHERE id=?',[email,id],(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        res.send(result);
    }
})

})

app.delete(`/delete/:id`,(req,res)=>{
    const id = req.params.id;
    db.query('DELETE FROM data WHERE id=?',id,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.listen(3001,()=>{console.log("server running...")})
