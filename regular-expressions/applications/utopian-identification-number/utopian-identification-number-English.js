function processData(input) {
    input.split('\n').splice(1).forEach(function(id){
        console.log(/^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}$/.test(id) ? 'VALID' : 'INVALID') ;
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});