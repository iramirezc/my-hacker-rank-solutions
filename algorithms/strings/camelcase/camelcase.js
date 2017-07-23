function processData(s) {
    var match = s.match(/[A-Z]/g);
    console.log(match ? match.length + 1 : 1);
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