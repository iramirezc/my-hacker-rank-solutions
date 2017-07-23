// Learned from https://www.hackerrank.com/yosriady's solution. QuickSelect?
function processData(input) {
    var array = input.split('\n')[1].split(' ').map(Number);
    var half = Math.floor(array.length / 2);
    var index, median, gt, lt;
    while (true) {
        index = Math.floor(array.length / 2);
        median = array[index];
        array.splice(index, 1);
        lt = [];
        gt = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] <= median) {
                lt.push(array[i]);
            } else {
                gt.push(array[i]);
            }
        }
        if (lt.length === half) {
            console.log(median);
            return;
        } else if (lt.length > half) {
            array = lt;
        } else {
            array = gt;
            half -= (lt.length + 1);
        }
    }
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