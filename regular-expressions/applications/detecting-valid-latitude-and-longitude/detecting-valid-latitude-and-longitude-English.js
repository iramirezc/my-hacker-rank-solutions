function processData(input) {
    input.split('\n').splice(1).forEach(function(c){
        console.log(/\(((\+|-)?(([1-9]|[1-8][0-9])(\.\d+)?|90(\.0+)?)),\s((\+|-)?(([1-9]|[1-9][0-9]|1[0-7][0-9])(\.\d+)?|180(\.0+)?))\)/.test(c) ? 'Valid' : 'Invalid');
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});

process.stdin.on("end", function () {processData(_input);});
