function processData(s) {
    var abc = {},
        total = 0;
    for (var i = 0, len = s.length; i < len; i++) {
        var letter = s.charAt(i).toLowerCase();
        if (/[a-z]/.test(letter) && !abc.hasOwnProperty(letter)) {
            abc[letter] = 1;
            total++;
        }
    }
    console.log(total === 26 ? 'pangram' : 'not pangram');
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