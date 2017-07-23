function isPalindrome(s) {
    for (var i = 0, len = s.length; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return i;
        }
    }
    return true;
}

function processData(input) {
    var line = 0,
        t = parseInt(input[line++]);
    while (t--) {
        var s = input[line++].split(""),
            len = s.length,
            index;
        if ((index = isPalindrome(s)) !== true) {
            s.splice(index, 1); // Remove leftmost index First
            if (isPalindrome(s) === true) {
                console.log(index);
            } else {
                console.log(len - 1 - index);
            }
        } else {
            console.log(-1);
        }
    }
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