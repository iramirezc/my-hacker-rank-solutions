function processData(s) {
    var chars = {},
        odds = 0;
    for (var c = 0; c < s.length; c++) {
        if (!chars.hasOwnProperty(s[c]))
            chars[s[c]] = 0;
        chars[s[c]]++;
    }
    var keys = Object.keys(chars);
    keys.forEach(function (k) {
        if (chars[k] & 2 !== 0)
            odds++;
    });
    console.log(odds <= 1 ? 'YES' : 'NO');
}

var _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    _input += input;
});
process.stdin.on("end", function () {
    processData(_input);
});