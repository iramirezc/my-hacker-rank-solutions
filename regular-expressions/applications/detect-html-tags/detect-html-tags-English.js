function processData(input) {
    var output = [];
    input.replace(/<\s*(\w+).*?>|<\s*(\w+).*?\/>/g, function(match, tag1, tag2){
        var tag = tag1 || tag2;
        if (tag && output.indexOf(tag) == -1) output.push(tag.trim());
    });
    console.log(output.sort().join(';'));
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
