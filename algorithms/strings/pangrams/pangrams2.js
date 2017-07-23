function processData(s) {
    s = s.toLowerCase();
    var abc = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0, len = s.length; i < len; i++)
        abc = abc.replace(s.charAt(i), "");
    console.log(abc.length === 0 ? 'pangram' : 'not pangram');
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