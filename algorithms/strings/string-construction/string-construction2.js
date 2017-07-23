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
            cost = {};
        for (var c = 0, len = s.length; c < len; c++) {
            if (!cost.hasOwnProperty(s[c])) {
                cost[s[c]] = true;
            }
        }
        console.log(Object.keys(cost).length);
    }
}