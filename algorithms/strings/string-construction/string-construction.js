var _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (data) {
    _input += data;
});
process.stdin.on("end", function () {
    main(_input.split('\n'));
});

function main(input) {
    var i = 0,
        t = parseInt(input[i++]);
    while (t-- > 0) {
        var s = input[i++],
            p = "",
            cost = 0;
        while (s.length > 0) {
            if (p.indexOf(s[0]) < 0) {
                cost++;
            }
            p += s[0];
            s = s.replace(s[0], "");
        }
        console.log(cost);
    }
}