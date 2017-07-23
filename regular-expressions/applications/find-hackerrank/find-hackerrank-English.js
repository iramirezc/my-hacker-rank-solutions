function processData(input) {
    input.trim().split('\n').splice(1).forEach(function(w){
        if(/^hackerrank$/.test(w)){
            console.log(0);
        }else if (/^hackerrank/.test(w)){
            console.log(1);
        }else if (/hackerrank$/.test(w)){
            console.log(2);
        }else{
            console.log(-1);
        }
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});