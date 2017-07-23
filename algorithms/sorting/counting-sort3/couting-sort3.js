function processData(input) {
    var global = 0;
    var numbers = [];
    for (var i = 0; i < 100; i++) {
        numbers[i] = 0;
    }
    var array = input.trim().split('\n').splice(1).map(function (obj) {
        obj = obj.split(' ');
        return {
            key: parseInt(obj[0]),
            string: obj[1]
        };
    }).forEach(function (obj) {
        numbers[obj.key] += 1;
    });
    var result = numbers[0] + " ";
    for (i = 1; i < 100; i++) {
        numbers[i] += numbers[i - 1];
        result += numbers[i] + " ";
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