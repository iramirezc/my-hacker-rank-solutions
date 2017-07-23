function processData(input) {
    var i = 0,
        t = parseInt(input[i++]);
    while (t-- > 0) {
        var s = input[i++],
            total = 0;
        for (var c = 0, len = s.length; c < len / 2; c++) {
            total += Math.abs(s.charCodeAt(c) - s.charCodeAt(len - 1 - c));
        }
        console.log(total);
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