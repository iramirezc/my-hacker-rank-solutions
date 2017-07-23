function processData(s) {
    for (var i = 1; i < s.length; i++) {
        if (s.charAt(i - 1) === s.charAt(i)) {
            s = s.replace(s.charAt(i) + s.charAt(i), ""); // Same character.
            i = 0;
        }
    }
    console.log(s || 'Empty String');
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