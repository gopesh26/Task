const fs = require('fs');
var strn="";
var data = fs.readFileSync('file.txt','utf8');
console.log("current file data:",data);

for(var i in data.toLowerCase() ){
    if (data[i]!="a"&&data[i]!="i"&&data[i]!="o"&&data[i]!="u"){
    strn+=data[i];
    }
}
console.log("new file data:",strn);
fs.writeFileSync("new_file.txt",strn);







//here (err,data) is callback
//fs.readFile: it will use callback func to show the data after running the entire code
//fs.readFileSync: it will not use callback func. but will run line by line exection  
