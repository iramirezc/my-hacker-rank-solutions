function processData(input) {
    input = input.trim().split('\n');
    var i = 0;
    var nkq = input[i++].split(' ').map(Number);
    nkq[1] = nkq[1] % nkq[0];
    var array = input[i++].split(' ').map(Number);
    for (var r = 0; r < nkq[1]; r++)
        array.unshift(array.pop());
    for (var q = 0; q < nkq[2]; q++)
        console.log(array[parseInt(input[i++])]);
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