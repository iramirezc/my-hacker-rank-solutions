function processData(input) {
    input = input.trim().split('\n');
    var A = input[0].split(' ').map(Number);
    var B = input[1].split(' ').map(Number);
    var alice = 0;
    var bob = 0;
    A.forEach(function (_, i) {
        if (A[i] > B[i])
            alice++;
        else if (A[i] < B[i])
            bob++;
    });
    console.log(alice + ' ' + bob);
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