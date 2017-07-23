function processData(input) {
    input = input.split('\n').map(Number);
    var k = input[1] - 1;
    var numbers = input.splice(2);
    numbers.sort(function (a, b) {
        return a - b;
    });
    var min = null;
    for (var i = 0; i + k < numbers.length; i++) {
        var u = numbers[i + k] - numbers[i];
        if (min === null || u < min) {
            min = u;
        }
    }
    console.log(min);
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