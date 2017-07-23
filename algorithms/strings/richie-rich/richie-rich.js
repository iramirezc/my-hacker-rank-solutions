function isPalindrome(s) {
    for (var i = 0, len = s.length; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function processData(input) {
    input[0] = input[0].split(' ');
    var n = parseInt(input[0][0]);
    var k = parseInt(input[0][1]);
    var s = input[1].split("").map(Number);
    var last, indexes = [];
    for (var i = 0; i < n / 2 && k > 0; i++) {
        last = n - 1 - i;
        if (s[i] !== s[last]) {
            if (s[i] > s[last]) {
                s[last] = s[i];
                indexes.push(i);
            } else {
                s[i] = s[last];
                indexes.push(i);
            }
            k--;
        }
    }
    if (k > 0) {
        i = 0;
        while (i < n / 2 && k > 0) {
            if (s[i] < 9) {
                if (indexes.indexOf(i) >= 0) {
                    k += 1;
                }
                if (k >= 2) {
                    s[i] = 9;
                    s[n - 1 - i] = 9;
                    k -= 2;
                }
            }
            i++;
        }
        if (k >= 1 && n % 2 !== 0) {
            s[Math.floor(n / 2)] = 9;
        }
    }
    console.log(isPalindrome(s) ? s.join("") : -1);
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