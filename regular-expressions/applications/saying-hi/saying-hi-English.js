function processData(input) {
    input.trim().split('\n').splice(1).forEach(function(sentence){
       if (/^[Hh][Ii]\s[^Dd]/.test(sentence)) console.log(sentence);
    });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});