var readline = require('readline');
var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var data = /** @class */ (function () {
    function data(id, name, marks) {
        this.id = id;
        this.Name = name;
        this.Marks = marks;
    }
    return data;
}());
;
var i = [];
var terminal_op = function () {
    var v = [];
    read.question('Enter ID ', function (id) {
        v.push(id);
        read.question('Enter Name ', function (Name) {
            v.push(Name);
            read.question('Enter Marks ', function (Marks) {
                v.push(Marks);
                read.question('Do You Want To Enter More Values? Y/N ', function (answer) {
                    v.push(answer);
                    if (answer == "n" || answer == "N") {
                        // var obj = new data(id,Name,Marks);
                        i.push(v);
                        console.log(i);
                        for (var j = 0; j < i.length; j++) {
                            console.log("id ", i[j][0]);
                            console.log("name ", i[j][1]);
                            console.log("marks ", i[j][2]);
                        }
                        read.close();
                    }
                    else {
                        var obj = new data(id, Name, Marks);
                        i.push(v);
                        terminal_op();
                    }
                });
            });
        });
    });
};
terminal_op();

