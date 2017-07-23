function processData(input) {
    var i = 0,
        t = input[i++];
    while (t-- > 0) {
        var s = input[i++],
            del = 0;
        for (var j = 1; j < s.length; j++) {
            if (s[j - 1] === s[j]) {
                s = s.replace(s[j - 1], "");
                del++;
                j = j - 1;
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