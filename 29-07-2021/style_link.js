const express =require("express");
const app = express();
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/style_linkn.html');
});

app.listen(3080);