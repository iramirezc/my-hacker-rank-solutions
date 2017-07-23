function processData(input) {
    input = input.split('\n');
    var n = parseInt(input[0]);
    var numbers = [];
    for (var i = 0; i < 100; i++) {
        numbers[i] = [];
    }
    var half = n / 2;
    for (i = 1; i <= n; i += 1) {
        var obj = input[i].split(' ');
        numbers[parseInt(obj[0])].push(i <= half ? '-' : obj[1]);
    }
    for (i = 0; i < numbers.length; i += 1) {
        for (var j = 0; j < numbers[i].length; j += 1) {
            process.stdout.write(numbers[i][j] + ' ');
        }
    }
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