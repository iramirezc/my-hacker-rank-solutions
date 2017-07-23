function processData(input) {
    input = input.split('\n');
    var nLines = parseInt(input[0]);
    var words = input.slice(1, nLines + 1).join(' ');
    var regexpWord = /(\W+|\s*)(\w+)\1/g;
    var substrings = input.slice(nLines + 2);
    substrings.forEach(function(sub){
        var regexpSub = new RegExp('(\\w+)' + sub + '\\w+', 'g');
        var matches = [];
        words.replace(regexpWord, function(_, g1, word){
            if (word.match(regexpSub)) matches.push(word);
        });
        console.log(matches.length);
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
