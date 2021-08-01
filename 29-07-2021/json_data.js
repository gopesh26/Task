var fs = require('fs');
var data = fs.readFileSync("json.txt");
var new_data = JSON.parse(data);
console.log(new_data); 