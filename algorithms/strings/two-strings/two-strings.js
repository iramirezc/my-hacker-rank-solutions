function processData(input) {
    var i = 0,
        t = parseInt(input[i++]);
    while (t--) {
        var s1 = input[i++],
            s2 = input[i++],
            sub = false;
        for (var c = 0; c < s1.length; c++) {
            if ((sub = s2.indexOf(s1[c]) >= 0)) {
                break;
            }
        }
        console.log(sub ? 'YES' : 'NO');
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