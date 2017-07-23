function processData(input) {
    var k = parseInt(input[2]) % 26;
    console.log(input[1].split("").map(function (c) {
        var code = c.charCodeAt(0);
        if (65 <= code && code <= 90) {
            code = 65 + (code - 65 + k) % 26;
        } else if (97 <= code && code <= 122) {
            code = 97 + (code - 97 + k) % 26;
        }
        return String.fromCharCode(code);
    }).join(""));
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