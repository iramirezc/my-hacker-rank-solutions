function processData(input) {
    var i = 0,
        t = parseInt(input[i++]);
    while (t-- > 0) {
        var s = input[i++],
            half = Math.ceil(s.length / 2),
            total = 0;
        for (var c = 0, len = s.length, k = len - 1; c < half; c++, k--) {
            if (s[c] !== s[k]) {
                total += Math.abs(s.charCodeAt(c) - s.charCodeAt(k));
            }
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