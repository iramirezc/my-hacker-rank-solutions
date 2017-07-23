function insert(array, rightIndex, value) {
    for (var j = rightIndex; j >= 0 && array[j] > value; j--)
        array[j + 1] = array[j];
    array[j + 1] = value;
    console.log(array.join(' '));
}

function insertSort(array) {
    for (var i = 1; i < array.length; i++)
        insert(array, i - 1, array[i]);
}

function processData(input) {
    var array = input.trim().split('\n')[1].split(' ').map(Number);
    insertSort(array);
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