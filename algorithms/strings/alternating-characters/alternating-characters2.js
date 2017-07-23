function processData(input) {
    var i = 0,
        t = input[i++];
    while (t-- > 0) {
        var s = input[i++],
            del = 0;
        for (var j = 0; j < s.length - 1; j++) {
            if (s[j] === s[j + 1]) {
                del++;
            }
        }
        console.log(del);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input.split('\n'));
});