function processData(input) {
    var bin = input.split('\n')[1];
    var match, count = 0;
    while ((match = bin.indexOf('010')) >= 0) {
        count++;
        bin = bin.replace('010', '011');
    }
    console.log(count);
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