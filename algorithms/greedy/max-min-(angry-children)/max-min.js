function main() {
    var n = parseInt(readLine());
    var k = parseInt(readLine()) - 1;
    var numbers = [];
    for (var i = 0; i < n; i++) {
        numbers.push(parseInt(readLine()));
    }
    numbers.sort(function (a, b) {
        return a - b;
    });
    var min = null;
    for (i = 0; i + k < numbers.length; i++) {
        var u = numbers[i + k] - numbers[i];
        if (min === null || u < min) {
            min = u;
        }
    }
    console.log(min);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
var _input = "",
    _line = 0;
process.stdin.on('data', function (data) {
    _input += data;
});
process.stdin.on('end', function () {
    _input = _input.split("\n");
    main();
});

function readLine() {
    return _input[_line++];
}