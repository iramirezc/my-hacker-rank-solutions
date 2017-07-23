function partition(array, leftIndex, rightIndex) {
    var lower = [];
    var higher = [];
    var pivot = array[leftIndex];
    for (var j = leftIndex + 1; j <= rightIndex; j += 1) {
        if (array[j] <= pivot) {
            lower.push(array[j]);
        } else {
            higher.push(array[j]);
        }
    }
    var k = leftIndex;
    for (var i = 0; i < lower.length; i++, k++) {
        array[k] = lower[i];
    }
    var q = k;
    array[k++] = pivot;
    for (i = 0; i < higher.length; i++, k++) {
        array[k] = higher[i];
    }
    return q;
}

function quickSort(array, leftIndex, rightIndex) {
    if (leftIndex < rightIndex) {
        var pivot = partition(array, leftIndex, rightIndex);
        quickSort(array, leftIndex, pivot - 1);
        quickSort(array, pivot + 1, rightIndex);
        console.log(array.slice(leftIndex, rightIndex + 1).join(' '));
    }
}

function processData(input) {
    var array = input.trim().split('\n')[1].split(' ').map(Number);
    quickSort(array, 0, array.length - 1);
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