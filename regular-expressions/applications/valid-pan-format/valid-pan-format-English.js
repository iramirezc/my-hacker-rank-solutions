function processData(input) {
    input.split('\n').splice(1).forEach(function(pan){
        console.log(/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan) ? 'YES' : 'NO');
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});