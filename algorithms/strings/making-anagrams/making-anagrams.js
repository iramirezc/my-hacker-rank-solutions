function processData(input) {
    var a = input[0],
        b = input[1],
        s = a;
    for (var c = 0; c < s.length; c++) {
        if (b.indexOf(s[c]) >= 0) {
            a = a.replace(s[c], "");
            b = b.replace(s[c], "");
        }
    }
    console.log(a.length + b.length);
}

var _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    _input += input;
});
process.stdin.on("end", function () {
    processData(_input.split('\n'));
});