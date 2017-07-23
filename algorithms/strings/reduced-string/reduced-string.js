function processData(input) {
    var s = input;
    var i = 0;
    while (i < s.length - 1) {
        if (s.charAt(i) === s.charAt(i + 1)) {
            s = s.replace(s.charAt(i) + s.charAt(i + 1), "");
            i = 0;
        } else {
            i++;
        }
    }
    console.log(s || 'Empty String');
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