const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class data{
    id;
    Name;
    Marks;
    constructor(id,name,marks){
        this.id = id;
        this.Name = name;
        this.Marks = marks;
    }

};
var i = [];
var terminal_op = function(){
var v =[];
read.question('Enter ID ', (id) => {
    v.push(id);
read.question('Enter Name ', (Name) => {
    v.push(Name);
read.question('Enter Marks ', (Marks) => {
    v.push(Marks);
read.question('Do You Want To Enter More Values? Y/N ', (answer) =>{
  
    if (answer == "n" || answer == "N"){
        i.push(v);
        console.log(i);
        for (var j=0;j<i.length;j++){
        console.log(`id: ${i[j][0]}`);
        console.log(`name: ${i[j][1]}`);
        console.log(`marks: ${i[j][2]}`);
        }
        read.close();
    }
    else{
        
        i.push(v);
        terminal_op();
    }
        });
    });
});
});
};

terminal_op();



