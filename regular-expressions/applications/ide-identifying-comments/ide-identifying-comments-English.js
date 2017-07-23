process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});

function processData(input) {
    var comments = input.match(/\/\/.*|\/\*[^]*?\*\//g) || [];
    comments.forEach(function(comment){
        comment.split('\n').forEach(function(line){
           console.log(line.trim()) ;
        });
    });
} 