var input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (data) {input += data;});
process.stdin.on("end", function () {main(input.split('\n'));});

function main(input) {
    var i = 0, T = parseInt(input[i++]);
    for (var t = 1; t <= T; t++) {
        var s = input[i++], funny = true;
        for (var c = 1, len = s.length; c < len; c++) {
            var r = len - 1 - c;
            if (Math.abs(s.charCodeAt(c) - s.charCodeAt(c - 1)) !== Math.abs(s.charCodeAt(r) - s.charCodeAt(r + 1))) {
                funny = false;
                break;
            }
        }
        console.log(funny ? 'Funny' : 'Not Funny');
    }
}