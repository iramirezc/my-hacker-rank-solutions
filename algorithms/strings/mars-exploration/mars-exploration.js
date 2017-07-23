var _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (data) {
    _input += data;
});
process.stdin.on("end", function () {
    main(_input);
});

function main(s) {
    var sos = 'SOS',
        errors = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== sos[i % 3]) {
            errors++;
        }
    }
    console.log(errors);
}