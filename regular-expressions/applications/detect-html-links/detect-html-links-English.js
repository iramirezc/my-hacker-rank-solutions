function processData(input) {
    input = input.split("\n");
    var n = input[0];
    for (var line = 1; line <= n; line++) {
        var regLink = /<a href="(.+?)"/g;
        var regName = />([^<>()]+?)<\//g;
        var link;
        while ((link = regLink.exec(input[line])) !== null) {
            var name;
            if ((name = regName.exec(input[line])) !== null) {
                name = name[1].trim();
            }
            console.log(link[1] + "," + (name || ""));
        }
    }
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
