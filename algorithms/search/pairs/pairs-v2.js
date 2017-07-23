// Using a Hash Table
function processData(input) {
    input = input.split('\n');
    var [n, k] = input[0].split(' ').map(Number);
    var hash_table = {},
        pairs = 0;
    var numbers = input[1].split(' ').map(function (n) {
        n = parseInt(n);
        hash_table[n] = n;
        return n;
    });
    numbers.forEach(function (n) {
        if (hash_table.hasOwnProperty(n + k)) {
            pairs++;
        }
    });
    console.log(pairs);
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