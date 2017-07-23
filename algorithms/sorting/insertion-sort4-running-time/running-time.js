function insert(array, rightIndex, value) {
    var nShifts = 0;
    for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
        nShifts += 1;
    }
    array[j + 1] = value;
    return nShifts;
}

function insertionSort(array) {
    var total = 0;
    for (var i = 1; i < array.length; i++) {
        total += insert(array, i - 1, array[i]);
    }
    console.log(total);
}

function processData(input) {
    var array = input.trim().split('\n')[1].split(' ').map(Number);
    insertionSort(array);
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