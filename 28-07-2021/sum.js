const http = require('http');
const fs = require('fs');
const express = require('express');
var app = express();

app.get("/",function(request,response){
response.sendFile(__dirname+"/sum.html")})

app.get("/getsum",function(request,response){
  var num1=parseInt(request.querry.Num1);
  var num2=parseInt(request.querry.Num2);
  var sum = num1+num2;
  response.send(sum);
})
app.listen(8080);
