function sortNumbers(a, b) {
    return a - b;
}

function processData(input) {
    input = input.split('\n');
    var k = parseInt(input[0].split(' ')[1]);
    var numbers = input[1].split(' ').map(Number);
    numbers.sort(sortNumbers);
    var pairs = 0,
        i = 0,
        j = 1;
    while (j < numbers.length) {
        var dif = numbers[j] - numbers[i];
        if (dif === k) {
            pairs++;
            j++;
            i++;
        } else if (dif < k) {
            j++;
        } else if (dif > k) {
            i++;
        }
    }
    console.log(pairs);
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