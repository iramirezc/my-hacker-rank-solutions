process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});

function processData(input) {
    var array = input.trim().split('\n')[1].split(' ').map(Number);
    var result = "";
    for(var i = array.length - 1; i >= 0; i--)
        result += array[i] + " ";
    console.log(result.trim());
}
