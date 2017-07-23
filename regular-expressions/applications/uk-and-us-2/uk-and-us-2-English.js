function processData(input) {
    var n = (input = input.trim().split('\n'))[0];
    var lines = input.splice(1, n).join(' ');
    input.splice(2).forEach(function(test){
        var match = lines.match(new RegExp('\\b' + test.replace(/our/, "(our|or)") + '\\b', 'g'));
        console.log(match ? match.length : 0);
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});