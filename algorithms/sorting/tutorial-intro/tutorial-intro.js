function processData(input) {
    input = input.trim().split('\n');
    var v = parseInt(input[0]);
    var array = input[2].split(' ').map(Number);
    console.log(array.indexOf(v));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});