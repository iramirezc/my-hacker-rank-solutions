function processData(input) {
    var steps = input.split('\n')[1];
    var current = 0,
        valleys = 0;
    for (var i = 0; i < steps.length; i++) {
        if (steps.charAt(i) === 'U') {
            current++;
            if (current === 0) {
                valleys++;
            }
        } else if (steps.charAt(i) === 'D') {
            current--;
        }
    }
    console.log(valleys);
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