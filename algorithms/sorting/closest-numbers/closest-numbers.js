function sortNumbers(a, b) {
    return a - b;
}

function processData(input) {
    var numbers = input.split('\n')[1].split(' ').map(Number).sort(sortNumbers);
    var pairs = {},
        min = null;
    for (var i = 0; i < numbers.length - 1; i++) {
        var absdif = Math.abs(numbers[i] - numbers[i + 1]);
        if (min === null || absdif < min) {
            min = absdif;
        }
        if (!pairs.hasOwnProperty(String(absdif))) {
            pairs[absdif] = [];
        }
        pairs[absdif].push.apply(pairs[absdif], [numbers[i], numbers[i + 1]]);
    }
    console.log(pairs[min].join(' '));
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