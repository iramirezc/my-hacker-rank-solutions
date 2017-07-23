function shift(array, i, n) {
    array[i] = n;
    console.log(array.join(' '));
}

function processData(input) {
    var array = input.trim().split('\n')[1].split(' ').map(Number);
    var n = array[array.length - 1];
    for (var i = array.length - 2; i >= 0; i--) {
        if (array[i] > n)
            shift(array, i + 1, array[i]);
        else
            break;
    }
    shift(array, i + 1, n);
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