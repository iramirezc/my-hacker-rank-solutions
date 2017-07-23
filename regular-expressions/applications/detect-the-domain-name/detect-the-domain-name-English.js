process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});

function processData(input) {
    var links = [];
    input.replace(/https?:\/\/([\w-]+(\.[\w-]+)+)\/?/gi, function(link){
        link = link.replace(/https?:|\/|ww(w|2)\.|_/gi, "");
        if (links.indexOf(link) === -1) links.push(link);
    });
    console.log(links.sort().join(';'));
}