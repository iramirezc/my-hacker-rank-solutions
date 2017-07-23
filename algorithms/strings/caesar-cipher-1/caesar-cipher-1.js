function encrypt(k) {
    var dict = {};
    "abcdefghijklmnopqrstuvwxyz".split("").forEach(function (c, i, array) {
        dict[c] = array[(i + k) % array.length];
    });
    return function (char) {
        if (dict[char])
            char = dict[char];
        return char;
    };
}

function processData(input) {
    var s = input[1],
        k = parseInt(input[2]),
        encoded = "",
        encryptChar = encrypt(k);
    for (var c = 0; c < s.length; c++) {
        if (s[c] === s[c].toUpperCase()) {
            encoded += encryptChar(s[c].toLowerCase()).toUpperCase();
        } else {
            encoded += encryptChar(s[c]);
        }
    }
    console.log(encoded);
}

var _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    _input += input;
});
process.stdin.on("end", function () {
    processData(_input.split('\n'));
});