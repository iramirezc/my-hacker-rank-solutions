process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});

function processData(input) {
    input = input.split('\n');
    var nLines = parseInt(input[0]);
    var sentences = input.slice(1, nLines + 1).join(' ');
    var regexpWord = /(\W+|\s*)(\w+)\1/g;
    input.slice(nLines + 2).forEach(function(word){
        var matches = 0;
        sentences.replace(regexpWord, function(_match, _g1, g2){
            if (word === g2) matches++;
        });
        console.log(matches);
    });
}