function processData(input) {
    input = input.trim().split('\n');
    var n = input[0];
    var lines = input.splice(1, n).join(' ');
    var test = input.splice(2);
    test.forEach(function(t){
        var match = lines.match(new RegExp(t.replace(/ze$/, "") + '(ze|se)', 'g'));
        console.log(match ? match.length : 0);
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});