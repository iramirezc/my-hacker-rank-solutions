function processData(input) {
    var i = 0,
        t = parseInt(input[i++]);
    while (t--) {
        var s = input[i++],
            len = s.length;
        if (len % 2 === 0) {
            var half = len / 2;
            var a = s.substring(0, half);
            var b = s.substring(half);
            for (var c = 0; c < b.length; c++) {
                a = a.replace(b[c], "");
            }
            console.log(a.length);
        } else {
            console.log(-1);
        }
    }
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