function processData(input) {
    var array = input.trim().split('\n')[1].split(' ').map(Number);
    var numbers = [];
    for (var i = 0; i < 100; i += 1) {
        numbers[i] = 0;
    }
    array.forEach(function (n) {
        numbers[n] += 1;
    });
    var result = "";
    for (i = 0; i < 100; i += 1) {
        for (var n = 0; n < numbers[i]; n += 1) {
            result += i + " ";
        }
    }
    console.log(result.trim());
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