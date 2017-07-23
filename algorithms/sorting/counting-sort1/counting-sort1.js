function processData(input) {
    var array = input.trim().split('\n')[1].split(' ').map(Number);
    var numbers = [];
    for (var n = 0; n <= 99; n++) {
        numbers[n] = 0;
    }
    array.forEach(function (n) {
        numbers[n] = numbers[n] + 1;
    });
    console.log(numbers.join(' '));
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