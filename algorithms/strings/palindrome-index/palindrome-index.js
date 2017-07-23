function isPalindrome(s) {
    for (var i = 0, len = s.length; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return i;
        }
    }
    return true;
}

function processData(input) {
    var l = 0,
        t = parseInt(input[l++]);
    while (t--) {
        var s = input[l++].split("");
        var copy = s.slice(0);
        var index = isPalindrome(s);
        if (index !== true) {
            s.splice(index, 1); // Remove leftmost index First
            var index2 = isPalindrome(s); // Check if is palindrome
            if (index2 === true) {
                console.log(index);
            } else { // If not, remove the rightmost index
                var rightIndex = (copy.length - 1) - index;
                copy.splice(rightIndex, 1);
                var index3 = isPalindrome(copy); //Check if is palindrome
                if (index3 === true) {
                    console.log(rightIndex);
                } else {
                    console.log(-1);
                }
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