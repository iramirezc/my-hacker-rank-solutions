function InsertionSort() {
    this.shifts = 0;

    this.insert = function (array, index, value) {
        for (var j = index; j >= 0 && array[j] > value; j -= 1) {
            array[j + 1] = array[j];
            this.shifts += 1;
        }
        array[j + 1] = value;
    };

    this.start = function (array) {
        for (var i = 1; i < array.length; i += 1) {
            this.insert(array, i - 1, array[i]);
        }
    };
}

function QuickSort() {
    this.swaps = 0;

    this.swap = function (array, index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        this.swaps += 1;
    };

    this.partition = function (array, l, r) {
        var p = l;
        for (var i = l; i < r; i += 1) {
            if (array[i] <= array[r]) {
                this.swap(array, i, p);
                p += 1;
            }
        }
        this.swap(array, r, p);
        return p;
    };

    this.start = function (array, l, r) {
        if (l < r) {
            var pivot = this.partition(array, l, r);
            this.start(array, l, pivot - 1);
            this.start(array, pivot + 1, r);
        }
    };
}

function processData(input) {
    var array = input.trim().split('\n')[1].split(' ').map(Number);
    var copy = array.slice();
    var quickSort = new QuickSort();
    quickSort.start(array, 0, array.length - 1);
    var insertionSort = new InsertionSort();
    insertionSort.start(copy);
    console.log(insertionSort.shifts - quickSort.swaps);
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