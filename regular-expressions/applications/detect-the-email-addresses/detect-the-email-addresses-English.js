process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});

function processData(input) {
    var emails = input.match(/\b[\w\.]+@\w+(\.\w+)+\b/ig) || [];
    console.log(emails.filter(function(email, i){
        return emails.indexOf(email) == i;
    }).sort().join(';'));
}
