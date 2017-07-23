process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});

function processData(input) {
    var alienFormat = /^(_|\.)\d+[a-zA-Z]*_?$/;
    input.split('\n').splice(1).forEach(function(name){
        console.log(alienFormat.test(name) ? 'VALID' : 'INVALID');
    });
}