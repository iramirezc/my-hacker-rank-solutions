function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function partition(array, leftIndex, rightIndex) {
    var equal = rightIndex;
    for (var j = rightIndex; j > 0; j -= 1) {
        if (array[j] >= array[leftIndex]) {
            swap(array, j, equal);
            equal -= 1;
        }
    }
    swap(array, leftIndex, equal);
    console.log(array.join(' '));
    return equal;
}

function processData(input) {
    var array = input.trim().split('\n')[1].split(' ').map(Number);
    partition(array, 0, array.length - 1);
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