function swap(array, p, r) {
    var temp = array[p];
    array[p] = array[r];
    array[r] = temp;
}

function partition(array, p, r) {
    var q = p;
    for (var j = p; j < r; j += 1) {
        if (array[j] <= array[r]) {
            swap(array, j, q);
            q += 1;
        }
    }
    swap(array, r, q);
    return q;
}

function quickSort(array, p, r) {
    if (p < r) {
        var pivot = partition(array, p, r);
        console.log(array.join(' '));
        quickSort(array, p, pivot - 1);
        quickSort(array, pivot + 1, r);
    }
}

function processData(input) {
    var array = input = input.trim().split('\n')[1].split(' ').map(Number);
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